import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {

  @ApiProperty({
    example: 'pearl@gmail.com',
  })
  @IsEmail()
  email!: string;

  @ApiProperty({
    example: '12345678',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password!: string;

}