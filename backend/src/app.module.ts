import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

import { UsersModule } from './users/users.module';
import { ChatbotModule } from './chatbot/chatbot.module';
import { CategoriesModule } from './categories/categories.module';
import { PackagesModule } from './packages/packages.module';

import { VendorModule } from './vendor/vendor.module';
import { BookingsModule } from './bookings/bookings.module';
import { ReviewsModule } from './reviews/reviews.module';
import { BudgetsModule } from './budgets/budgets.module';
import { ExpensesModule } from './expenses/expenses.module';
import { LeadsModule } from './leads/leads.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    PrismaModule,
    AuthModule,
    UsersModule,
    VendorModule,
    ChatbotModule,
    CategoriesModule, 
     PackagesModule, BookingsModule, ReviewsModule, BudgetsModule, ExpensesModule, LeadsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}