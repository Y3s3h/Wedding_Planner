import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {

  register(registerDto: RegisterDto) {
    return {
      success: true,
      message: 'User Registration API Working',
      data: registerDto,
    };
  }

}