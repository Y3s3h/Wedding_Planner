import {
  Controller, Post, Get, Body, UseGuards,
  UseInterceptors, UploadedFile, BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { ChatbotService } from './chatbot.service';
import { ApiBearerAuth } from '@nestjs/swagger'; 
import { SendMessageDto } from './dto/send-message.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@UseGuards(JwtAuthGuard)
@Controller('chatbot')
@ApiBearerAuth() 
export class ChatbotController {
  constructor(private chatbotService: ChatbotService) {}

  @Post('message')
  sendMessage(
    @CurrentUser() user: { sub: string; role: string },
    @Body() dto: SendMessageDto,
  ) {
    return this.chatbotService.sendMessage(user.sub, user.role, dto.message);
  }

  @Post('voice-message')
  @UseInterceptors(
    FileInterceptor('audio', {
      storage: memoryStorage(),
      limits: { fileSize: 20 * 1024 * 1024 },
    }),
  )
  sendVoiceMessage(
    @CurrentUser() user: { sub: string; role: string },
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) throw new BadRequestException('No audio file uploaded');
    return this.chatbotService.transcribeAndRespond(user.sub, user.role, file.buffer, file.mimetype);
  }

  @Get('history')
  getHistory(@CurrentUser() user: { sub: string }) {
    return this.chatbotService.getHistory(user.sub);
  }
}