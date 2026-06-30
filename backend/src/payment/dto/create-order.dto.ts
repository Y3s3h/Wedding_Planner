import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({
    example: 'booking-id-123',
  })
  @IsString()
  bookingId: string;

  @ApiProperty({
    example: 50000,
  })
  @IsNumber()
  @IsPositive()
  amount: number;
}