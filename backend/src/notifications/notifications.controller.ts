import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiTags,
} from '@nestjs/swagger';

import { Role } from '@prisma/client';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

import { NotificationsService } from './notifications.service';

import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationStatusDto } from './dto/update-notification-status.dto';

@ApiTags('Notifications')
@ApiBearerAuth()
@Controller('notifications')
export class NotificationsController {
  constructor(
    private readonly notificationsService: NotificationsService,
  ) {}

  // ===========================
  // CREATE
  // ===========================

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER, Role.VENDOR)
  create(
    @CurrentUser('sub') userId: string,
    @Body() dto: CreateNotificationDto,
  ) {
    return this.notificationsService.create(
      userId,
      dto,
    );
  }

  // ===========================
  // GET ALL
  // ===========================

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER, Role.VENDOR)
  findAll(
    @CurrentUser('sub') userId: string,
  ) {
    return this.notificationsService.findAll(
      userId,
    );
  }

  // ===========================
  // GET ONE
  // ===========================

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER, Role.VENDOR)
  findOne(
    @Param('id') id: string,
    @CurrentUser('sub') userId: string,
  ) {
    return this.notificationsService.findOne(
      id,
      userId,
    );
  }

  // ===========================
  // MARK AS READ
  // ===========================

  @Patch(':id/read')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER, Role.VENDOR)
  updateStatus(
    @Param('id') id: string,
    @CurrentUser('sub') userId: string,
    @Body() dto: UpdateNotificationStatusDto,
  ) {
    return this.notificationsService.updateStatus(
      id,
      userId,
      dto,
    );
  }

  // ===========================
  // DELETE
  // ===========================

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER, Role.VENDOR)
  remove(
    @Param('id') id: string,
    @CurrentUser('sub') userId: string,
  ) {
    return this.notificationsService.remove(
      id,
      userId,
    );
  }
}