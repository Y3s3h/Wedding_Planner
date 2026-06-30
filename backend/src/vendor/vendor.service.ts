import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { SearchVendorDto } from './dto/search-vendor.dto';

import { Role } from '@prisma/client';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Injectable()
export class VendorService {

  constructor(
    private readonly prisma: PrismaService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async createVendor(
  userId: string,
  createVendorDto: CreateVendorDto,
) {
  const existingVendor = await this.prisma.vendor.findUnique({
    where: {
      userId,
    },
  });

  if (existingVendor) {
    throw new BadRequestException(
      'Vendor profile already exists',
    );
  }

  // Create Vendor Profile
  const vendor = await this.prisma.vendor.create({
    data: {
      businessName: createVendorDto.businessName,
      description: createVendorDto.description,
      address: createVendorDto.address,
      categoryId: createVendorDto.categoryId,
      userId,
    },
  });

  // Update User Role to VENDOR
  await this.prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      role: Role.VENDOR,
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

async searchVendors(searchVendorDto: SearchVendorDto) {

  const page = Number(searchVendorDto.page) || 1;
  const limit = Number(searchVendorDto.limit) || 10;

  const vendors = await this.prisma.vendor.findMany({

    where: {

      ...(searchVendorDto.search && {
        businessName: {
          contains: searchVendorDto.search,
          mode: 'insensitive',
        },
      }),

      ...(searchVendorDto.city && {
        address: {
          contains: searchVendorDto.city,
          mode: 'insensitive',
        },
      }),

    },

    include: {
      category: true,
    },

    skip: (page - 1) * limit,

    take: limit,

    orderBy: {
      createdAt: 'desc',
    },
  });

  return {
    success: true,
    page,
    limit,
    count: vendors.length,
    data: vendors,
  };
}
async getDashboard(userId: string) {

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

  const totalPackages = await this.prisma.package.count({
    where: {
      vendorId: vendor.id,
    },
  });

  const totalBookings = await this.prisma.booking.count({
    where: {
      package: {
        vendorId: vendor.id,
      },
    },
  });

  const pendingBookings = await this.prisma.booking.count({
    where: {
      package: {
        vendorId: vendor.id,
      },
      status: 'PENDING',
    },
  });

  const confirmedBookings = await this.prisma.booking.count({
    where: {
      package: {
        vendorId: vendor.id,
      },
      status: 'CONFIRMED',
    },
  });

  const cancelledBookings = await this.prisma.booking.count({
    where: {
      package: {
        vendorId: vendor.id,
      },
      status: 'CANCELLED',
    },
  });

  return {
    success: true,
    data: {
      totalPackages,
      totalBookings,
      pendingBookings,
      confirmedBookings,
      cancelledBookings,
      totalRevenue: 0,
      averageRating: 0,
    },
  };
}

async uploadVendorLogo(
  userId: string,
  file: Express.Multer.File,
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

  const uploadedImage: any =
    await this.cloudinaryService.uploadImage(file);

  const updatedVendor =
    await this.prisma.vendor.update({
      where: {
        userId,
      },
      data: {
        logoUrl: uploadedImage.secure_url,
      },
    });

  return {
    success: true,
    message: 'Logo uploaded successfully',
    image: uploadedImage.secure_url,
    data: updatedVendor,
  };
}
async uploadVendorCover(
  userId: string,
  file: Express.Multer.File,
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

  const uploaded: any =
    await this.cloudinaryService.uploadImage(file);

  const updatedVendor =
    await this.prisma.vendor.update({
      where: {
        userId,
      },
      data: {
        coverImage: uploaded.secure_url,
      },
    });

  return {
    success: true,
    message: 'Cover image uploaded successfully',
    coverImage: updatedVendor.coverImage,
  };
}

async uploadGallery(
  userId: string,
  files: Express.Multer.File[],
) {

  // Check Vendor Exists
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

  if (!files || files.length === 0) {
    throw new BadRequestException(
      'Please upload at least one image',
    );
  }

  const uploadedImages: any[] = [];

  for (const file of files) {

    const uploaded: any =
      await this.cloudinaryService.uploadImage(file);

    const gallery =
      await this.prisma.vendorGallery.create({
        data: {
          imageUrl: uploaded.secure_url,
          vendorId: vendor.id,
        },
      });

    uploadedImages.push(gallery);
  }

  return {
    success: true,
    message: 'Gallery uploaded successfully',
    count: uploadedImages.length,
    data: uploadedImages,
  };
}

async getGallery(userId: string) {

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

  const gallery = await this.prisma.vendorGallery.findMany({
    where: {
      vendorId: vendor.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return {
    success: true,
    count: gallery.length,
    data: gallery,
  };
}

async deleteGalleryImage(
  userId: string,
  imageId: string,
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

  const image = await this.prisma.vendorGallery.findUnique({
    where: {
      id: imageId,
    },
  });

  if (!image || image.vendorId !== vendor.id) {
    throw new NotFoundException(
      'Gallery image not found',
    );
  }

  await this.prisma.vendorGallery.delete({
    where: {
      id: imageId,
    },
  });

  return {
    success: true,
    message: 'Gallery image deleted successfully',
  };
}


}