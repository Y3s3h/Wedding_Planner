import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class UpdateChecklistStatusDto {

  @ApiProperty({
    example: true,
  })
  @IsBoolean()
  isDone!: boolean;

}