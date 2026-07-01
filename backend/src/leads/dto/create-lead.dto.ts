import { IsDateString, IsEmail, IsInt, IsOptional, IsString, IsUUID, Min } from 'class-validator';

export class CreateLeadDto {
  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsDateString()
  eventDate!: string;

  @IsInt()
  @Min(1)
  guestCount!: number;

  @IsString()
  message!: string;

  @IsUUID()
  vendorId!: string;

  @IsOptional()
  @IsUUID()
  packageId?: string;
}