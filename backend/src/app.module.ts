import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

import { UsersModule } from './users/users.module';
import { ChatbotModule } from './chatbot/chatbot.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    PrismaModule,
    AuthModule,
    UsersModule,
    ChatbotModule,
    CategoriesModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}