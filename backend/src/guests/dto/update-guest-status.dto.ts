import { ApiProperty } from '@nestjs/swagger';
import { GuestStatus } from '@prisma/client';
import { IsEnum } from 'class-validator';

export class UpdateGuestStatusDto {

  @ApiProperty({
    enum: GuestStatus,
  })
  @IsEnum(GuestStatus)
  status: GuestStatus;

}