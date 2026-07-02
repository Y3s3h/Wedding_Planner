import { Module } from '@nestjs/common';
import { VendorController } from './vendor.controller';
import { VendorService } from './vendor.service';
import { PrismaModule } from '../prisma/prisma.module';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    PrismaModule,
    CloudinaryModule,
    AuthModule
  ],
  controllers: [VendorController],
  providers: [VendorService],
})
export class VendorModule {}