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

import { ChecklistService } from './checklist.service';

import { CreateChecklistDto } from './dto/create-checklist.dto';
import { UpdateChecklistDto } from './dto/update-checklist.dto';
import { UpdateChecklistStatusDto } from './dto/update-checklist-status.dto';

@ApiTags('Checklist')
@ApiBearerAuth()
@Controller('checklist')
export class ChecklistController {
  constructor(
    private readonly checklistService: ChecklistService,
  ) {}

  // ===========================
  // CREATE
  // ===========================

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  create(
    @CurrentUser('sub') userId: string,
    @Body() dto: CreateChecklistDto,
  ) {
    return this.checklistService.create(userId, dto);
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
    return this.checklistService.findAll(userId);
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
    return this.checklistService.findOne(id, userId);
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
    @Body() dto: UpdateChecklistDto,
  ) {
    return this.checklistService.update(
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
    @Body() dto: UpdateChecklistStatusDto,
  ) {
    return this.checklistService.updateStatus(
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
    return this.checklistService.remove(
      id,
      userId,
    );
  }
}