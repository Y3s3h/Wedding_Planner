import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import Groq from 'groq-sdk';
import { PrismaService } from '../prisma/prisma.service';

const CUSTOMER_INSTRUCTION = `You are a friendly wedding planning assistant for couples on a wedding planning platform.
You help with budgeting tips, checklist guidance, and advice on choosing vendors (photographers, caterers, decorators, DJs, makeup artists, venues).
Keep responses warm, concise, and practical.`;

const VENDOR_INSTRUCTION = `You are a friendly business assistant for wedding vendors on a wedding planning platform.
You help vendors write portfolio descriptions, structure and price service packages, respond professionally to leads, and get more bookings.
Keep responses practical and business-focused.`;

const SUPPORTED_AUDIO_FORMATS = ['mp3', 'mp4', 'mpeg', 'mpga', 'm4a', 'wav', 'webm'];

@Injectable()
export class ChatbotService {
  private groq: Groq;

  constructor(private prisma: PrismaService) {
    this.groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
  }

  async sendMessage(userId: string, role: string, content: string) {
    // Fetch history BEFORE saving current message to avoid duplication
    const recent = await this.prisma.chatMessage.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 19, // 19 history + 1 current = 20 total context messages
    });
    const history = recent.reverse();

    // Save user message after fetching history
    await this.prisma.chatMessage.create({
      data: { userId, role: 'USER', content },
    });

    // Build messages array for Groq
    const messages = [
      {
        role: 'system' as const,
        content:
          role?.toUpperCase() === 'VENDOR'
            ? VENDOR_INSTRUCTION
            : CUSTOMER_INSTRUCTION,
      },
      ...history.map((m) => ({
        role: m.role === 'USER' ? ('user' as const) : ('assistant' as const),
        content: m.content,
      })),
      // Add current message explicitly
      { role: 'user' as const, content },
    ];

    // Call Groq with error handling
    let replyText: string;
    try {
      const completion = await this.groq.chat.completions.create({
        model: 'llama-3.3-70b-versatile',
        messages,
        temperature: 0.7,
        max_tokens: 1024,
      });

      replyText =
        completion.choices[0]?.message?.content ??
        "Sorry, I couldn't generate a response. Please try again.";
    } catch (error) {
      throw new InternalServerErrorException(
        'AI service is currently unavailable. Please try again later.',
      );
    }

    // Save assistant reply
    await this.prisma.chatMessage.create({
      data: { userId, role: 'ASSISTANT', content: replyText },
    });

    return { reply: replyText };
  }

  async transcribeAndRespond(
    userId: string,
    role: string,
    audioBuffer: Buffer,
    mimeType: string,
  ) {
    // Validate audio format
    const format = mimeType.split('/')[1];
    if (!SUPPORTED_AUDIO_FORMATS.includes(format)) {
      throw new BadRequestException(
        `Unsupported audio format: ${format}. Supported formats: ${SUPPORTED_AUDIO_FORMATS.join(', ')}`,
      );
    }

    // Transcribe with error handling
    let transcript: string;
    try {
      const transcription = await this.groq.audio.transcriptions.create({
        file: new File(
  [new Uint8Array(audioBuffer)],
  `audio.${format}`,
  { type: mimeType },
),
        model: 'whisper-large-v3',
        response_format: 'text',
      });

      transcript = transcription.toString().trim();
    } catch (error) {
      throw new InternalServerErrorException(
        'Audio transcription failed. Please try again.',
      );
    }

    if (!transcript) {
      throw new BadRequestException(
        'Could not transcribe audio. Please speak clearly and try again.',
      );
    }

    // Reuse text pipeline
    const result = await this.sendMessage(userId, role, transcript);
    return { transcript, reply: result.reply };
  }

  async getHistory(userId: string) {
    return this.prisma.chatMessage.findMany({
      where: { userId },
      orderBy: { createdAt: 'asc' },
    });
  }
}