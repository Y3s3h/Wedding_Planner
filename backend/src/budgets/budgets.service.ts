import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';

@Injectable()
export class BudgetsService {
  constructor(private prisma: PrismaService) {}

  // Acts as an upsert: creates if none exists, updates totalBudget if it does
  async createOrUpdate(userId: string, dto: CreateBudgetDto) {
    return this.prisma.budget.upsert({
      where: { userId },
      update: { totalBudget: dto.totalBudget },
      create: { userId, totalBudget: dto.totalBudget },
    });
  }

  async findMine(userId: string) {
    const budget = await this.prisma.budget.findUnique({
      where: { userId },
      include: { expenses: true },
    });

    if (!budget) throw new NotFoundException('Budget not found. Please create one first.');

    return budget;
  }

  async getSummary(userId: string) {
    const budget = await this.prisma.budget.findUnique({
      where: { userId },
      include: { expenses: true },
    });

    if (!budget) throw new NotFoundException('Budget not found. Please create one first.');

    const spentAmount = budget.expenses.reduce(
      (sum, expense) => sum + Number(expense.amount),
      0,
    );
    const remainingBudget = Number(budget.totalBudget) - spentAmount;

    const categoryBreakdown: Record<string, number> = {};
    for (const expense of budget.expenses) {
      categoryBreakdown[expense.category] =
        (categoryBreakdown[expense.category] ?? 0) + Number(expense.amount);
    }

    return {
      totalBudget: Number(budget.totalBudget),
      spentAmount,
      remainingBudget,
      categoryBreakdown,
    };
  }

  async update(userId: string, dto: UpdateBudgetDto) {
    const existing = await this.prisma.budget.findUnique({ where: { userId } });
    if (!existing) throw new NotFoundException('Budget not found. Please create one first.');

    return this.prisma.budget.update({
      where: { userId },
      data: { totalBudget: dto.totalBudget },
    });
  }

  async remove(userId: string) {
    const existing = await this.prisma.budget.findUnique({ where: { userId } });
    if (!existing) throw new NotFoundException('Budget not found');

    await this.prisma.budget.delete({ where: { userId } });
    return { message: 'Budget deleted successfully' };
  }
}
