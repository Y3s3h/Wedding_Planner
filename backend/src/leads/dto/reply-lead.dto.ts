import { IsString, MinLength } from 'class-validator';

export class ReplyLeadDto {
  @IsString()
  @MinLength(1)
  reply!: string;
}