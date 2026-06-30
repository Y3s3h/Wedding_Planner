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
<<<<<<< HEAD
import { PaymentModule } from './payment/payment.module';


=======
import { BookingsModule } from './bookings/bookings.module';
>>>>>>> 07f40107b02a4d9afbf5d8531ca259b1b44ae08c

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
     PackagesModule, PaymentModule,
     PackagesModule, BookingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}