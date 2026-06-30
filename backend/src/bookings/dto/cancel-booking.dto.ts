import { IsString } from 'class-validator';

export class CancelBookingDto {
  @IsString()
  cancellationReason!: string;
}