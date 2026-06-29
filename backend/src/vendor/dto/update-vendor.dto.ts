import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateVendorDto {

  @IsOptional()
  @IsString()
  businessName?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsUUID()
  categoryId?: string;

}