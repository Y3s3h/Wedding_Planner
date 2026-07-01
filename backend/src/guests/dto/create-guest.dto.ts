import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateGuestDto {

  @ApiProperty({
    example: 'Rahul Sharma',
  })
  @IsString()
  name: string;

  @ApiProperty({
    required: false,
    example: '9876543210',
  })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({
    required: false,
    example: 'rahul@gmail.com',
  })
  @IsOptional()
  @IsEmail()
  email?: string;
}