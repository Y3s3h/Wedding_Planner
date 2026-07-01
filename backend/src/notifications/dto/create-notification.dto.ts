import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateNotificationDto {
  @ApiProperty({
    example: 'Booking Confirmed',
  })
  @IsString()
  title!: string;

  @ApiProperty({
    example: 'Your booking has been confirmed.',
  })
  @IsString()
  message!: string;
}