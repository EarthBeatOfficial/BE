import { IsInt, IsArray } from 'class-validator';

export class FinishSessionDto {
  @IsInt()
  distance: number;

  @IsInt()
  duration: number;

  @IsArray()
  completedSignals: {
    signalId: number;
    responseId: number;
  }[];
} 