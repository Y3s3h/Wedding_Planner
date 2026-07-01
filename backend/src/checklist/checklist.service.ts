import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateChecklistDto } from './dto/create-checklist.dto';
import { UpdateChecklistDto } from './dto/update-checklist.dto';
import { UpdateChecklistStatusDto } from './dto/update-checklist-status.dto';

@Injectable()
export class ChecklistService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  // ==========================
  // CREATE
  // ==========================

  async create(
    userId: string,
    dto: CreateChecklistDto,
  ) {
    const task = await this.prisma.checklist.create({
      data: {
        userId,
        task: dto.task,
      },
    });

    return {
      success: true,
      message: 'Checklist task created successfully',
      data: task,
    };
  }

  // ==========================
  // GET ALL
  // ==========================

  async findAll(userId: string) {
    const tasks = await this.prisma.checklist.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return {
      success: true,
      count: tasks.length,
      data: tasks,
    };
  }

  // ==========================
  // GET ONE
  // ==========================

  async findOne(
    id: string,
    userId: string,
  ) {
    const task = await this.prisma.checklist.findUnique({
      where: {
        id,
      },
    });

    if (!task) {
      throw new NotFoundException(
        'Checklist task not found',
      );
    }

    if (task.userId !== userId) {
      throw new ForbiddenException(
        'Access denied',
      );
    }

    return {
      success: true,
      data: task,
    };
  }

  // ==========================
  // UPDATE
  // ==========================

  async update(
    id: string,
    userId: string,
    dto: UpdateChecklistDto,
  ) {
    await this.findOne(id, userId);

    const task = await this.prisma.checklist.update({
      where: {
        id,
      },
      data: dto,
    });

    return {
      success: true,
      message: 'Checklist updated successfully',
      data: task,
    };
  }

  // ==========================
  // UPDATE STATUS
  // ==========================

  async updateStatus(
    id: string,
    userId: string,
    dto: UpdateChecklistStatusDto,
  ) {
    await this.findOne(id, userId);

    const task = await this.prisma.checklist.update({
      where: {
        id,
      },
      data: {
        isDone: dto.isDone,
      },
    });

    return {
      success: true,
      message: 'Checklist status updated successfully',
      data: task,
    };
  }

  // ==========================
  // DELETE
  // ==========================

  async remove(
    id: string,
    userId: string,
  ) {
    await this.findOne(id, userId);

    await this.prisma.checklist.delete({
      where: {
        id,
      },
    });

    return {
      success: true,
      message: 'Checklist deleted successfully',
    };
  }
}