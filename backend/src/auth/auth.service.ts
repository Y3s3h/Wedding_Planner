import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {

  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async register(registerDto: RegisterDto) {
    return {
      success: true,
      message: 'User Registration API Working',
      data: registerDto,
    };
  }

  login(loginDto: LoginDto) {
  return {
    success: true,
    message: 'Login API Working',
    data: loginDto,
  };
}

}