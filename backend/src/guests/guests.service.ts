import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';
import { UpdateGuestStatusDto } from './dto/update-guest-status.dto';

@Injectable()
export class GuestsService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  // ==========================
  // CREATE GUEST
  // ==========================

  async create(
    userId: string,
    dto: CreateGuestDto,
  ) {
    const guest = await this.prisma.guest.create({
      data: {
        ...dto,
        userId,
      },
    });

    return {
      success: true,
      message: 'Guest added successfully',
      data: guest,
    };
  }

  // ==========================
  // GET ALL GUESTS
  // ==========================

  async findAll(userId: string) {
    const guests = await this.prisma.guest.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return {
      success: true,
      count: guests.length,
      data: guests,
    };
  }

  // ==========================
  // GET SINGLE GUEST
  // ==========================

  async findOne(
    id: string,
    userId: string,
  ) {
    const guest = await this.prisma.guest.findUnique({
      where: {
        id,
      },
    });

    if (!guest) {
      throw new NotFoundException(
        'Guest not found',
      );
    }

    if (guest.userId !== userId) {
      throw new ForbiddenException(
        'Access denied',
      );
    }

    return {
      success: true,
      data: guest,
    };
  }

  // ==========================
  // UPDATE GUEST
  // ==========================

  async update(
    id: string,
    userId: string,
    dto: UpdateGuestDto,
  ) {
    await this.findOne(id, userId);

    const guest = await this.prisma.guest.update({
      where: {
        id,
      },
      data: dto,
    });

    return {
      success: true,
      message: 'Guest updated successfully',
      data: guest,
    };
  }

  // ==========================
  // UPDATE STATUS
  // ==========================

  async updateStatus(
    id: string,
    userId: string,
    dto: UpdateGuestStatusDto,
  ) {
    await this.findOne(id, userId);

    const guest = await this.prisma.guest.update({
      where: {
        id,
      },
      data: {
        status: dto.status,
      },
    });

    return {
      success: true,
      message: 'Guest status updated successfully',
      data: guest,
    };
  }

  // ==========================
  // DELETE GUEST
  // ==========================

  async remove(
    id: string,
    userId: string,
  ) {
    await this.findOne(id, userId);

    await this.prisma.guest.delete({
      where: {
        id,
      },
    });

    return {
      success: true,
      message: 'Guest deleted successfully',
    };
  }
}