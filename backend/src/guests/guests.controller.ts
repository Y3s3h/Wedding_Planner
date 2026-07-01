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

import { GuestsService } from './guests.service';

import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';
import { UpdateGuestStatusDto } from './dto/update-guest-status.dto';

@ApiTags('Guests')
@ApiBearerAuth()
@Controller('guests')
export class GuestsController {
  constructor(
    private readonly guestsService: GuestsService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  create(
    @CurrentUser('sub') userId: string,
    @Body() dto: CreateGuestDto,
  ) {
    return this.guestsService.create(userId, dto);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  findAll(
    @CurrentUser('sub') userId: string,
  ) {
    return this.guestsService.findAll(userId);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  findOne(
    @Param('id') id: string,
    @CurrentUser('sub') userId: string,
  ) {
    return this.guestsService.findOne(id, userId);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  update(
    @Param('id') id: string,
    @CurrentUser('sub') userId: string,
    @Body() dto: UpdateGuestDto,
  ) {
    return this.guestsService.update(id, userId, dto);
  }

  @Patch(':id/status')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  updateStatus(
    @Param('id') id: string,
    @CurrentUser('sub') userId: string,
    @Body() dto: UpdateGuestStatusDto,
  ) {
    return this.guestsService.updateStatus(
      id,
      userId,
      dto,
    );
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  remove(
    @Param('id') id: string,
    @CurrentUser('sub') userId: string,
  ) {
    return this.guestsService.remove(id, userId);
  }
}