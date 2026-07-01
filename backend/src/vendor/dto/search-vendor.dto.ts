import {
  IsOptional,
  IsString,
  IsNumberString,
} from 'class-validator';

import { ApiPropertyOptional } from '@nestjs/swagger';

export class SearchVendorDto {

  @ApiPropertyOptional({
    example: 'Photography',
  })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiPropertyOptional({
    example: 'Delhi',
  })
  @IsOptional()
  @IsString()
  city?: string;

  @ApiPropertyOptional({
    example: '1',
  })
  @IsOptional()
  @IsNumberString()
  page?: string;

  @ApiPropertyOptional({
    example: '10',
  })
  @IsOptional()
  @IsNumberString()
  limit?: string;
}