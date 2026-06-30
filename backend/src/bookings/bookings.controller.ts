import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';

import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { CancelBookingDto } from './dto/cancel-booking.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Role } from '@prisma/client';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()

@UseGuards(JwtAuthGuard)
@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post()
  create(
    @CurrentUser('sub') userId: string,
    @Body() dto: CreateBookingDto,
  ) {
    return this.bookingsService.create(userId, dto);
  }

  @Get()
  findMyBookings(
    @CurrentUser('sub') userId: string,
    @CurrentUser('role') role: Role,
  ) {
    return this.bookingsService.findMyBookings(userId, role);
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
    @CurrentUser('sub') userId: string,
    @CurrentUser('role') role: Role,
  ) {
    return this.bookingsService.findOne(id, userId, role);
  }

  @Patch(':id/accept')
  accept(
    @Param('id') id: string,
    @CurrentUser('sub') userId: string,
  ) {
    return this.bookingsService.accept(id, userId);
  }

  @Patch(':id/reject')
  reject(
    @Param('id') id: string,
    @CurrentUser('sub') userId: string,
    @Body() dto: CancelBookingDto,
  ) {
    return this.bookingsService.reject(id, userId, dto.cancellationReason);
  }

  @Patch(':id/confirm')
  confirm(
    @Param('id') id: string,
    @CurrentUser('sub') userId: string,
  ) {
    return this.bookingsService.confirm(id, userId);
  }

  @Patch(':id/cancel')
  cancel(
    @Param('id') id: string,
    @CurrentUser('sub') userId: string,
    @Body() dto: CancelBookingDto,
  ) {
    return this.bookingsService.cancel(id, userId, dto);
  }
}
