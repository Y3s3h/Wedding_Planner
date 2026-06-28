import { Injectable , BadRequestException} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {

  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async register(registerDto: RegisterDto) {

  // Step 1
  const existingUser = await this.prisma.user.findUnique({
    where: {
      email: registerDto.email,
    },
  });

  if (existingUser) {
    throw new BadRequestException('Email already registered');
  }
   const existingPhone = await this.prisma.user.findUnique({
  where: {
    phone: registerDto.phone,
  },
});

if (existingPhone) {
  throw new BadRequestException('Phone number already registered');
}
  // Step 2
  const hashedPassword = await bcrypt.hash(registerDto.password, 10);

  // Step 3
  const user = await this.prisma.user.create({
    data: {
      name: registerDto.name,
      email: registerDto.email,
      phone: registerDto.phone,
      password: hashedPassword,
    },
  });

  // Step 4
  return {
    success: true,
    message: 'User registered successfully',
    data: {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
    },
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