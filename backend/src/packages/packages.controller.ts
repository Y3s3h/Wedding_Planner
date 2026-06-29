import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiQuery } from '@nestjs/swagger';
import { PackagesService } from './packages.service';
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('Packages')
@Controller('packages')
export class PackagesController {
  constructor(private packagesService: PackagesService) {}

  @Get()
  @ApiQuery({ name: 'categoryId', required: false })
  findAll(@Query('categoryId') categoryId?: string) {
    return this.packagesService.findAll(categoryId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.packagesService.findOne(id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('my/packages')
  findMyPackages(@CurrentUser() user: { sub: string }) {
    return this.packagesService.findMyPackages(user.sub);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @CurrentUser() user: { sub: string },
    @Body() dto: CreatePackageDto,
  ) {
    return this.packagesService.create(user.sub, dto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @CurrentUser() user: { sub: string },
    @Body() dto: UpdatePackageDto,
  ) {
    return this.packagesService.update(id, user.sub, dto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(
    @Param('id') id: string,
    @CurrentUser() user: { sub: string },
  ) {
    return this.packagesService.remove(id, user.sub);
  }
}
