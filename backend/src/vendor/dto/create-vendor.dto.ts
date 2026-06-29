import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID
} from 'class-validator';

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateVendorDto {

  @ApiProperty({
    example: 'Pearl Wedding Studio',
  })
  @IsString()
  @IsNotEmpty()
  businessName!: string;

  @ApiPropertyOptional({
    example: 'Professional Wedding Photography',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    example: 'Delhi NCR',
  })
  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsUUID()
  categoryId?: string;

}