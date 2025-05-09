import { ApiProperty } from '@nestjs/swagger';

export class RespondedSignalDto {
  @ApiProperty({
    description: 'Signal title',
    example: 'Please help water my plant',
  })
  title: string;

  @ApiProperty({ description: 'Signal description', example: 'I have an ~~~' })
  description: string;

  @ApiProperty({
    description: 'Signal category',
    example: 'Nature-focused Walk',
  })
  category: string;

  @ApiProperty({
    description: 'When the signal was responded to',
    example: '2024-03-20T15:25:00Z',
  })
  respondedAt: Date;
}

export class WalkLogDto {
  @ApiProperty({ description: 'Total distance in kilometers', example: '1.5' })
  distance: number;

  @ApiProperty({
    description: 'When the walk was completed',
    example: '2024-03-20T15:30:00Z',
  })
  walkedAt: Date;

  @ApiProperty({
    description: 'Signals responded to during the walk',
    type: [RespondedSignalDto],
  })
  respondedSignals: RespondedSignalDto[];
}
