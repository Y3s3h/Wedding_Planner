import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class CreateOrderDto {

  @ApiProperty({
    example: '8d9d2a84-c6c8-4c1f-8ef8-f2c6a7d6e8e1',
  })
  @IsUUID()
  bookingId!: string;
}