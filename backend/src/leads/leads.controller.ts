import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

import { LeadsService } from './leads.service';
import { CreateLeadDto } from './dto/create-lead.dto';
import { ReplyLeadDto } from './dto/reply-lead.dto';
import { UpdateLeadStatusDto } from './dto/update-lead-status.dto';
import { ConvertLeadDto } from './dto/convert-lead.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Role } from '@prisma/client';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Post()
  create(@CurrentUser('sub') userId: string, @Body() dto: CreateLeadDto) {
    return this.leadsService.create(userId, dto);
  }

  @Get()
  findAll(
    @CurrentUser('sub') userId: string,
    @CurrentUser('role') role: Role,
  ) {
    return this.leadsService.findAll(userId, role);
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
    @CurrentUser('sub') userId: string,
    @CurrentUser('role') role: Role,
  ) {
    return this.leadsService.findOne(id, userId, role);
  }

  @Patch(':id/reply')
  reply(
    @Param('id') id: string,
    @CurrentUser('sub') userId: string,
    @Body() dto: ReplyLeadDto,
  ) {
    return this.leadsService.reply(userId, id, dto);
  }

  @Patch(':id/status')
  updateStatus(
    @Param('id') id: string,
    @CurrentUser('sub') userId: string,
    @Body() dto: UpdateLeadStatusDto,
  ) {
    return this.leadsService.updateStatus(userId, id, dto);
  }

  @Patch(':id/convert')
  convert(
    @Param('id') id: string,
    @CurrentUser('sub') userId: string,
    @Body() dto: ConvertLeadDto,
  ) {
    return this.leadsService.convert(userId, id, dto);
  }
}
