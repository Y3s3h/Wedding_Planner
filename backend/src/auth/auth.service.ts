import { Injectable , BadRequestException} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Role } from '@prisma/client';


@Injectable()
export class AuthService {

  constructor(
  private readonly prisma: PrismaService,
  private readonly jwtService: JwtService,
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
      role: Role.USER,
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
  async login(loginDto: LoginDto) {
    const user = await this.prisma.user.findUnique({
  where: {
    email: loginDto.email,
  },
});
if (!user) {
  throw new BadRequestException('Invalid email or password');
}
  const isPasswordCorrect = await bcrypt.compare(
  loginDto.password,
  user.password,
);
if (!isPasswordCorrect) {
  throw new BadRequestException('Invalid email or password');
}
const token = await this.jwtService.signAsync({
  sub: user.id,
  email: user.email,
  role: user.role,
});
  return {
  success: true,
  message: 'Login successful',
  accessToken: token,
  user: {
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    role: user.role,
  },
};
}

}