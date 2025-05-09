import { IsNumber, IsString, IsPositive, Min, Max } from 'class-validator';

export class CreateSignalDto {
  @IsNumber()
  @IsPositive()
  userId: number;

  @IsNumber()
  @IsPositive()
  categoryId: number;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  lat: number;

  @IsNumber()
  lng: number;

  @IsNumber()
  @Min(1)
  @Max(1440) // 24 hours in minutes
  timeLimit: number;
} 