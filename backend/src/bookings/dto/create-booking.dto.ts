import { IsString, IsDateString, IsOptional } from 'class-validator';

export class CreateBookingDto {
  @IsString()
  packageId!: string;

  @IsDateString()
  eventDate!: string;

  @IsOptional()
  @IsString()
  notes?: string;
}