import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';

@Injectable()
export class VendorService {

  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async createVendor(
  userId: string,
  createVendorDto: CreateVendorDto,
) {

  const existingVendor =
    await this.prisma.vendor.findUnique({
      where: {
        userId,
      },
    });

  if (existingVendor) {
    throw new BadRequestException(
      'Vendor profile already exists',
    );
  }

  const vendor = await this.prisma.vendor.create({
    data: {
      businessName: createVendorDto.businessName,
      description: createVendorDto.description,
      address: createVendorDto.address,
      categoryId: createVendorDto.categoryId,
      userId,
    },
  });

  return {
    success: true,
    message: 'Vendor profile created successfully',
    data: vendor,
  };
}

async getMyVendorProfile(userId: string) {
  const vendor = await this.prisma.vendor.findUnique({
    where: {
      userId,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
        },
      },
      category: true,
    },
  });

  if (!vendor) {
    throw new BadRequestException(
      'Vendor profile not found',
    );
  }

  return {
    success: true,
    data: vendor,
  };
}

async updateVendorProfile(
  userId: string,
  updateVendorDto: UpdateVendorDto,
) {

  const vendor = await this.prisma.vendor.findUnique({
    where: {
      userId,
    },
  });

  if (!vendor) {
    throw new BadRequestException(
      'Vendor profile not found',
    );
  }

  const updatedVendor = await this.prisma.vendor.update({
    where: {
      userId,
    },
    data: {
      ...updateVendorDto,
    },
  });

  return {
    success: true,
    message: 'Vendor profile updated successfully',
    data: updatedVendor,
  };
}

async getAllVendors() {
  const vendors = await this.prisma.vendor.findMany({
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
        },
      },
      category: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return {
    success: true,
    count: vendors.length,
    data: vendors,
  };
}

async getVendorById(id: string) {

  const vendor = await this.prisma.vendor.findUnique({
    where: {
      id,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
        },
      },
      category: true,
      packages: true,
    },
  });

  if (!vendor) {
    throw new NotFoundException(
      'Vendor not found',
    );
  }

  return {
    success: true,
    data: vendor,
  };
}
}