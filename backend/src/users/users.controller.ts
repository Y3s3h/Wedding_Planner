import {
  Controller,
  Get,
  Req,
  UseGuards,
} from '@nestjs/common';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UsersService } from './users.service';
import { Patch, Body } from '@nestjs/common';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ChangePasswordDto } from './dto/change-password.dto';

@ApiTags('Users')
@ApiBearerAuth()         
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async getProfile(@Req() req: any) {
    return this.usersService.getProfile(req.user.sub);
  }
  @Patch('profile')
@UseGuards(JwtAuthGuard)
async updateProfile(
  @Req() req: any,
  @Body() updateProfileDto: UpdateProfileDto,
) {
  return this.usersService.updateProfile(
    req.user.sub,
    updateProfileDto,
  );
}

@Patch('change-password')
@UseGuards(JwtAuthGuard)
async changePassword(
  @Req() req: any,
  @Body() changePasswordDto: ChangePasswordDto,
) {
  return this.usersService.changePassword(
    req.user.sub,
    changePasswordDto,
  );
}
}