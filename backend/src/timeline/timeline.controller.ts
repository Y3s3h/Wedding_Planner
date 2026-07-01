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

import { TimelineService } from './timeline.service';

import { CreateTimelineDto } from './dto/create-timeline.dto';
import { UpdateTimelineDto } from './dto/update-timeline.dto';
import { UpdateTimelineStatusDto } from './dto/update-timeline-status.dto';

@ApiTags('Timeline')
@ApiBearerAuth()
@Controller('timeline')
export class TimelineController {
  constructor(
    private readonly timelineService: TimelineService,
  ) {}

  // ===========================
  // CREATE
  // ===========================

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  create(
    @CurrentUser('sub') userId: string,
    @Body() dto: CreateTimelineDto,
  ) {
    return this.timelineService.create(
      userId,
      dto,
    );
  }

  // ===========================
  // GET ALL
  // ===========================

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  findAll(
    @CurrentUser('sub') userId: string,
  ) {
    return this.timelineService.findAll(
      userId,
    );
  }

  // ===========================
  // GET ONE
  // ===========================

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  findOne(
    @Param('id') id: string,
    @CurrentUser('sub') userId: string,
  ) {
    return this.timelineService.findOne(
      id,
      userId,
    );
  }

  // ===========================
  // UPDATE
  // ===========================

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  update(
    @Param('id') id: string,
    @CurrentUser('sub') userId: string,
    @Body() dto: UpdateTimelineDto,
  ) {
    return this.timelineService.update(
      id,
      userId,
      dto,
    );
  }

  // ===========================
  // UPDATE STATUS
  // ===========================

  @Patch(':id/status')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  updateStatus(
    @Param('id') id: string,
    @CurrentUser('sub') userId: string,
    @Body() dto: UpdateTimelineStatusDto,
  ) {
    return this.timelineService.updateStatus(
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
  @Roles(Role.USER)
  remove(
    @Param('id') id: string,
    @CurrentUser('sub') userId: string,
  ) {
    return this.timelineService.remove(
      id,
      userId,
    );
  }
}