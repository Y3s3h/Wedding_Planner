import {
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
  Get,
  Param
} from '@nestjs/common';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { VendorService } from './vendor.service';

import { Patch } from '@nestjs/common';
import { UpdateVendorDto } from './dto/update-vendor.dto';


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

@Get(':id')
async getVendorById(
  @Param('id') id: string,
) {
  return this.vendorService.getVendorById(id);
}
}