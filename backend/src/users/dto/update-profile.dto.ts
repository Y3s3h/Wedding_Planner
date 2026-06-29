import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateProfileDto {

  @ApiPropertyOptional({
    example: 'Pearl Kayastha',
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({
    example: '9876543210',
  })
  @IsOptional()
  @IsString()
  phone?: string;

}