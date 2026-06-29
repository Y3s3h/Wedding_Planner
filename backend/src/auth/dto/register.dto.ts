import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {

  @ApiProperty({
    example: 'Pearl',
  })
  @IsNotEmpty()
  @IsString()
  name!: string;

  @ApiProperty({
    example: 'pearl@gmail.com',
  })
  @IsEmail()
  email!: string;

  @ApiProperty({
    example: '9876543210',
  })
  @IsNotEmpty()
  @IsString()
  phone!: string;

  @ApiProperty({
    example: '12345678',
  })
  @IsString()
  @MinLength(6)
  password!: string;
}