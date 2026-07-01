import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class UpdateNotificationStatusDto {
  @ApiProperty({
    example: true,
  })
  @IsBoolean()
  isRead!: boolean;
}