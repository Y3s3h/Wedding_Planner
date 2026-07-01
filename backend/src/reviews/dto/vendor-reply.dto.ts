import { IsString, MinLength } from 'class-validator';

export class VendorReplyDto {
  @IsString()
  @MinLength(1)
  reply!: string;
}