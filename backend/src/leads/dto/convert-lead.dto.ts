import { IsUUID } from 'class-validator';

export class ConvertLeadDto {
  @IsUUID()
  packageId!: string;
}