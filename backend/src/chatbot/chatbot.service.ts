import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import Groq from 'groq-sdk';
import { PrismaService } from '../prisma/prisma.service';

const CUSTOMER_INSTRUCTION = `You are a wedding planning assistant for couples on a wedding planning platform.
Help with budgeting tips, checklist guidance, and advice on choosing vendors (photographers, caterers, decorators, DJs, makeup artists, venues).
Keep responses short, warm, and practical — 3-4 sentences max unless the user asks for detail.
Only answer questions related to wedding planning or this platform. If asked about anything else, politely decline and redirect to wedding planning topics.
You may be given real data below relevant to the question. Always use this data to answer specific questions accurately. If the answer isn't in the data provided, say you don't have that information — never guess or make up numbers, vendor names, or prices.`;

const VENDOR_INSTRUCTION = `You are a business assistant for wedding vendors on a wedding planning platform.
Help vendors write portfolio descriptions, structure and price service packages, respond professionally to leads, and get more bookings.
Keep responses short, practical, and business-focused — 3-4 sentences max unless the user asks for detail.
Only answer questions related to running their wedding vendor business or this platform. If asked about anything else, politely decline and redirect.
You may be given real data below relevant to the question. Always use this data to answer specific questions accurately. If the answer isn't in the data provided, say you don't have that information — never guess or make up numbers.`;

const SUPPORTED_AUDIO_FORMATS = ['mp3', 'mp4', 'mpeg', 'mpga', 'm4a', 'wav', 'webm'];

// --- Topic keyword maps ---
const TOPIC_KEYWORDS: Record<string, string[]> = {
  budget: ['budget', 'expense', 'expenses', 'spending', 'how much have i spent', 'remaining budget'],
  bookings: ['booking', 'book', 'my booking', 'event date', 'confirmed', 'cancel my', 'booking status'],
  vendors_packages: ['vendor', 'photographer', 'caterer', 'decorator', 'dj', 'makeup', 'venue', 'package', 'price', 'pricing', 'find me', 'search', 'category', 'how much does', 'show me'],
  leads: ['lead', 'leads', 'inquiry', 'inquiries', 'new request'],
};

const SITE_CONTENT_KEYWORDS: Record<string, string[]> = {
  'about-us': ['about', 'who are you', 'company', 'about this platform', 'who runs'],
  'privacy-policy': ['privacy', 'data policy', 'personal data', 'gdpr'],
  'terms': ['terms', 'terms and conditions', 'terms of service', 'legal'],
  'faq': ['faq', 'how do i', 'how to', 'how can i'],
  'pricing': ['pricing', 'subscription', 'fees', 'how much does it cost to'],
};

@Injectable()
export class ChatbotService {
  private groq: Groq;

  constructor(private prisma: PrismaService) {
    this.groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
  }

  private formatDecimal(val: any): string {
    return `₹${Number(val).toLocaleString('en-IN')}`;
  }

  // --- Topic matching ---
  private matchTopics(message: string): string[] {
    const lower = message.toLowerCase();
    return Object.entries(TOPIC_KEYWORDS)
      .filter(([, keywords]) => keywords.some((kw) => lower.includes(kw)))
      .map(([topic]) => topic);
  }

  private matchSiteContentSlugs(message: string): string[] {
    const lower = message.toLowerCase();
    return Object.entries(SITE_CONTENT_KEYWORDS)
      .filter(([, keywords]) => keywords.some((kw) => lower.includes(kw)))
      .map(([slug]) => slug);
  }

  // --- Topic-specific data fetchers ---
  private async getBudgetContext(userId: string): Promise<string> {
    const budget = await this.prisma.budget.findUnique({
      where: { userId },
      include: { expenses: { orderBy: { date: 'desc' }, take: 15 } },
    });

    if (!budget) return 'This user has not created a budget yet.';

    const spent = budget.expenses.reduce((sum, e) => sum + Number(e.amount), 0);
    const remaining = Number(budget.totalBudget) - spent;

    const expenseList = budget.expenses
      .map((e) => `- ${e.title} (${e.category}): ${this.formatDecimal(e.amount)}${e.note ? ` — ${e.note}` : ''}`)
      .join('\n') || 'No expenses logged yet.';

    return `Budget:
Total budget: ${this.formatDecimal(budget.totalBudget)}
Spent so far: ${this.formatDecimal(spent)}
Remaining: ${this.formatDecimal(remaining)}

Recent expenses:
${expenseList}`;
  }

  private async getBookingsContext(userId: string, role: string): Promise<string> {
    if (role?.toUpperCase() === 'VENDOR') {
      const vendor = await this.prisma.vendor.findUnique({ where: { userId }, select: { id: true } });
      if (!vendor) return 'This vendor has not completed their profile yet.';

      const bookings = await this.prisma.booking.findMany({
        where: { vendorId: vendor.id },
        take: 10,
        orderBy: { createdAt: 'desc' },
        select: { status: true, eventDate: true, totalAmount: true, paymentStatus: true, package: { select: { title: true } } },
      });

      const list = bookings
        .map((b) => `- "${b.package.title}", ${b.eventDate.toDateString()}, status: ${b.status}, payment: ${b.paymentStatus}, amount: ${this.formatDecimal(b.totalAmount)}`)
        .join('\n') || 'No bookings yet.';

      return `This vendor's bookings:\n${list}`;
    }

    const bookings = await this.prisma.booking.findMany({
      where: { userId },
      take: 10,
      orderBy: { createdAt: 'desc' },
      select: {
        status: true, eventDate: true, totalAmount: true, paymentStatus: true,
        vendor: { select: { businessName: true } },
        package: { select: { title: true } },
      },
    });

    const list = bookings
      .map((b) => `- "${b.package.title}" with ${b.vendor.businessName}, ${b.eventDate.toDateString()}, status: ${b.status}, payment: ${b.paymentStatus}, amount: ${this.formatDecimal(b.totalAmount)}`)
      .join('\n') || 'No bookings yet.';

    return `This user's bookings:\n${list}`;
  }

  // --- UPDATED: now detects a specific category mentioned in the message and filters by it ---
  private async getVendorsPackagesContext(message: string): Promise<string> {
    const lower = message.toLowerCase();

    const allCategories = await this.prisma.category.findMany({ select: { id: true, name: true } });
    const matchedCategory = allCategories.find((c) => {
      const nameLower = c.name.toLowerCase();
      const singular = nameLower.replace(/s$/, ''); // "caterers" -> "caterer"
      return lower.includes(nameLower) || lower.includes(singular);
    });

    const categoryWhere = matchedCategory ? { categoryId: matchedCategory.id } : {};

    const [categories, vendors, packages] = await Promise.all([
      this.prisma.category.findMany({ take: 30, select: { name: true } }),
      this.prisma.vendor.findMany({
        take: matchedCategory ? 50 : 25,
        where: categoryWhere,
        select: { businessName: true, address: true, category: { select: { name: true } } },
      }),
      this.prisma.package.findMany({
        take: matchedCategory ? 50 : 30,
        where: categoryWhere,
        orderBy: { createdAt: 'desc' },
        select: {
          title: true, price: true, inclusions: true,
          vendor: { select: { businessName: true } },
          category: { select: { name: true } },
        },
      }),
    ]);

    const categoryList = categories.map((c) => c.name).join(', ');

    const vendorList =
      vendors
        .map((v) => `- ${v.businessName} (${v.category?.name ?? 'Uncategorized'})${v.address ? `, ${v.address}` : ''}`)
        .join('\n') ||
      (matchedCategory ? `No vendors found in the "${matchedCategory.name}" category.` : 'No vendors found.');

    const packageList =
      packages
        .map((p) => `- "${p.title}" by ${p.vendor.businessName} (${p.category.name}) — ${this.formatDecimal(p.price)}${p.inclusions?.length ? `, includes: ${p.inclusions.join(', ')}` : ''}`)
        .join('\n') ||
      (matchedCategory ? `No packages found in the "${matchedCategory.name}" category.` : 'No packages found.');

    return `Available categories: ${categoryList}

Vendors${matchedCategory ? ` in the "${matchedCategory.name}" category` : ' on the platform (sample)'}:
${vendorList}

Packages${matchedCategory ? ` in the "${matchedCategory.name}" category` : ' available (sample)'}:
${packageList}`;
  }

  private async getLeadsContext(userId: string, role: string): Promise<string> {
    if (role?.toUpperCase() !== 'VENDOR') return '';

    const vendor = await this.prisma.vendor.findUnique({ where: { userId }, select: { id: true } });
    if (!vendor) return 'This vendor has not completed their profile yet.';

    const leads = await this.prisma.lead.findMany({
      where: { vendorId: vendor.id },
      take: 10,
      orderBy: { createdAt: 'desc' },
      select: { name: true, status: true, eventDate: true, guestCount: true, message: true },
    });

    const list = leads
      .map((l) => `- ${l.name}, event on ${l.eventDate.toDateString()}, guests: ${l.guestCount}, status: ${l.status}`)
      .join('\n') || 'No leads yet.';

    return `This vendor's leads:\n${list}`;
  }

  private async getSiteContentContext(slugs: string[]): Promise<string> {
    if (slugs.length === 0) return '';
    const pages = await this.prisma.siteContent.findMany({ where: { slug: { in: slugs } } });
    if (pages.length === 0) return '';
    return `Platform information (answer using only this content for these topics):\n${pages
      .map((p) => `--- ${p.title} ---\n${p.content}`)
      .join('\n\n')}`;
  }

  // --- Build context based on matched topics only ---
  private async buildContext(userId: string, role: string, message: string): Promise<string> {
    const topics = this.matchTopics(message);
    const siteSlugs = this.matchSiteContentSlugs(message);

    const sections: string[] = [];

    if (topics.includes('budget')) {
      sections.push(await this.getBudgetContext(userId));
    }
    if (topics.includes('bookings')) {
      sections.push(await this.getBookingsContext(userId, role));
    }
    if (topics.includes('vendors_packages')) {
      sections.push(await this.getVendorsPackagesContext(message));
    }
    if (topics.includes('leads')) {
      const leadsCtx = await this.getLeadsContext(userId, role);
      if (leadsCtx) sections.push(leadsCtx);
    }
    if (siteSlugs.length > 0) {
      const siteCtx = await this.getSiteContentContext(siteSlugs);
      if (siteCtx) sections.push(siteCtx);
    }

    return sections.join('\n\n');
  }

  async sendMessage(userId: string, role: string, content: string) {
    const recent = await this.prisma.chatMessage.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 19,
    });
    const history = recent.reverse();

    await this.prisma.chatMessage.create({
      data: { userId, role: 'USER', content },
    });

    const dataContext = await this.buildContext(userId, role, content);
    const baseInstruction = role?.toUpperCase() === 'VENDOR' ? VENDOR_INSTRUCTION : CUSTOMER_INSTRUCTION;
    const systemContent = dataContext ? `${baseInstruction}\n\n${dataContext}` : baseInstruction;

    const messages = [
      { role: 'system' as const, content: systemContent },
      ...history.map((m) => ({
        role: m.role === 'USER' ? ('user' as const) : ('assistant' as const),
        content: m.content,
      })),
      { role: 'user' as const, content },
    ];

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
    const format = mimeType.split('/')[1];
    if (!SUPPORTED_AUDIO_FORMATS.includes(format)) {
      throw new BadRequestException(
        `Unsupported audio format: ${format}. Supported formats: ${SUPPORTED_AUDIO_FORMATS.join(', ')}`,
      );
    }

    let transcript: string;
    try {
      const transcription = await this.groq.audio.transcriptions.create({
        file: new File([new Uint8Array(audioBuffer)], `audio.${format}`, { type: mimeType }),
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