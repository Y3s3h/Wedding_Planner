import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateChecklistDto {

  @ApiProperty({
    example: 'Book Venue',
  })
  @IsString()
  task!: string;

}