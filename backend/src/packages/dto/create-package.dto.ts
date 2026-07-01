import { IsString, IsNotEmpty, IsOptional, IsNumber, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreatePackageDto {
  @ApiProperty({ example: 'Basic Photography Package' })
  @IsString()
  @IsNotEmpty()
  title!: string;

  @ApiProperty({ example: 'Includes 4 hours of coverage', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 25000 })
  @IsNumber()
  @Type(() => Number)
  price!: number;

  @ApiProperty({ example: 'cat-uuid-here' })
  @IsString()
  @IsNotEmpty()
  categoryId!: string;

  @ApiProperty({ 
    example: ['4 hours coverage', '500 edited photos', '1 photographer'],
    required: false 
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  inclusions?: string[];
}