import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class CompletedSignalDto {
  @ApiProperty({
    description: 'ID of the signal that was completed',
    example: 1,
  })
  @IsNumber()
  signalId: number;
}

export class FinishSessionDto {
  @ApiProperty({
    description: 'Array of signals completed during the walk',
    type: [CompletedSignalDto],
    example: [
      {
        signalId: 1,
      },
      {
        signalId: 2,
      },
    ],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CompletedSignalDto)
  completedSignals: CompletedSignalDto[];
}
