import { IsInt, IsString, Length } from 'class-validator';

export class CreateResponseDto {
  @IsInt()
  userId: number;
 
  @IsString()
  @Length(1, 255)
  message: string;
} 