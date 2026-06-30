import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

import { BudgetsService } from './budgets.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('budgets')
export class BudgetsController {
  constructor(private readonly budgetsService: BudgetsService) {}

  @Post()
  createOrUpdate(@CurrentUser('sub') userId: string, @Body() dto: CreateBudgetDto) {
    return this.budgetsService.createOrUpdate(userId, dto);
  }

  @Get()
  findMine(@CurrentUser('sub') userId: string) {
    return this.budgetsService.findMine(userId);
  }

  @Get('summary')
  getSummary(@CurrentUser('sub') userId: string) {
    return this.budgetsService.getSummary(userId);
  }

  @Patch()
  update(@CurrentUser('sub') userId: string, @Body() dto: UpdateBudgetDto) {
    return this.budgetsService.update(userId, dto);
  }

  @Delete()
  remove(@CurrentUser('sub') userId: string) {
    return this.budgetsService.remove(userId);
  }
}