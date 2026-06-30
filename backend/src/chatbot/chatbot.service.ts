import { Injectable } from '@nestjs/common';
import { GoogleGenAI } from '@google/genai';
import { PrismaService } from '../prisma/prisma.service';

const CUSTOMER_INSTRUCTION = `You are a friendly wedding planning assistant for couples on a wedding planning platform.
You help with budgeting tips, checklist guidance, and advice on choosing vendors (photographers, caterers, decorators, DJs, makeup artists, venues).
Keep responses warm, concise, and practical.`;

const VENDOR_INSTRUCTION = `You are a friendly business assistant for wedding vendors on a wedding planning platform.
You help vendors write portfolio descriptions, structure and price service packages, respond professionally to leads, and get more bookings.
Keep responses practical and business-focused.`;

@Injectable()
export class ChatbotService {
  private ai: GoogleGenAI;

  constructor(private prisma: PrismaService) {
    this.ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }

  async sendMessage(userId: string, role: string, content: string) {
    await this.prisma.chatMessage.create({
      data: { userId, role: 'USER', content },
    });

    const recent = await this.prisma.chatMessage.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 20,
    });
    const history = recent.reverse();

    const contents = history.map((m) => ({
      role: m.role === 'USER' ? 'user' : 'model',
      parts: [{ text: m.content }],
    }));

    const systemInstruction = role === 'VENDOR' ? VENDOR_INSTRUCTION : CUSTOMER_INSTRUCTION;

    const response = await this.ai.models.generateContent({
      model: 'gemini-2.0-flash-lite',
      contents,
      config: { systemInstruction },
    });

    const replyText = response.text ?? "Sorry, I couldn't generate a response. Please try again.";

    await this.prisma.chatMessage.create({
      data: { userId, role: 'ASSISTANT', content: replyText },
    });

    return { reply: replyText };
  }

  async transcribeAndRespond(userId: string, role: string, audioBuffer: Buffer, mimeType: string) {
    const base64Audio = audioBuffer.toString('base64');

    const transcriptionResponse = await this.ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        {
          role: 'user',
          parts: [
            { text: 'Transcribe exactly what is said in this audio. Return ONLY the transcript text, nothing else — no labels, no quotes.' },
            { inlineData: { mimeType, data: base64Audio } },
          ],
        },
      ],
    });

    const transcript = transcriptionResponse.text?.trim();
    if (!transcript) {
      throw new Error('Could not transcribe audio. Please try again.');
    }

    // Reuse the exact same pipeline as a text message — stores transcript, replies, stores reply
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
