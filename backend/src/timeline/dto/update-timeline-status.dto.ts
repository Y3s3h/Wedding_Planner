import { ApiProperty } from '@nestjs/swagger';
import { TimelineStatus } from '@prisma/client';
import { IsEnum } from 'class-validator';

export class UpdateTimelineStatusDto {

  @ApiProperty({
    enum: TimelineStatus,
  })
  @IsEnum(TimelineStatus)
  status: TimelineStatus;

}