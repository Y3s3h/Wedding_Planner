import {
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
  Get,
  Param,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { VendorService } from './vendor.service';

import { Patch } from '@nestjs/common';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { Query } from '@nestjs/common';
import { SearchVendorDto } from './dto/search-vendor.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Vendor')
@ApiBearerAuth()
@Controller('vendor')
export class VendorController {
  constructor(
    private readonly vendorService: VendorService,
  ) {}

  @Post('profile')
  @UseGuards(JwtAuthGuard)
  async createVendor(
    @Req() req: any,
    @Body() createVendorDto: CreateVendorDto,
  ) {
    return this.vendorService.createVendor(
      req.user.sub,
      createVendorDto,
    );
  }

  @Get('profile')
@UseGuards(JwtAuthGuard)
async getMyVendorProfile(
  @Req() req: any,
) {
  return this.vendorService.getMyVendorProfile(
    req.user.sub,
  );
}

@Patch('profile')
@UseGuards(JwtAuthGuard)
async updateVendorProfile(
  @Req() req: any,
  @Body() updateVendorDto: UpdateVendorDto,
) {
  return this.vendorService.updateVendorProfile(
    req.user.sub,
    updateVendorDto,
  );
}
@Get('all')
async getAllVendors() {
  return this.vendorService.getAllVendors();
}

@Get('search')
async searchVendors(
  @Query() searchVendorDto: SearchVendorDto,
) {
  return this.vendorService.searchVendors(
    searchVendorDto,
  );
}
@Get('dashboard')
@UseGuards(JwtAuthGuard)
async getDashboard(
  @Req() req: any,
) {
  return this.vendorService.getDashboard(
    req.user.sub,
  );
}

@Get(':id')
async getVendorById(
  @Param('id') id: string,
) {
  return this.vendorService.getVendorById(id);
}
@Post('upload-logo')
@UseGuards(JwtAuthGuard)
@UseInterceptors(FileInterceptor('image'))
async uploadVendorLogo(
  @Req() req: any,
  @UploadedFile() file: Express.Multer.File,
) {
  return this.vendorService.uploadVendorLogo(
    req.user.sub,
    file,
  );
}
}