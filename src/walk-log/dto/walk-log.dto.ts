import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class RespondedSignalDto {
  @ApiProperty({
    description: 'Signal title',
    example: 'Please help water my plant',
  })
  title: string;

  @ApiProperty({ description: 'Signal description', example: 'I have an ~~~' })
  description: string;

  @ApiProperty({ description: 'Signal category id', example: 1 })
  categoryId: number;

  @ApiProperty({
    description: 'Signal category',
    example: 'Water Plants / Plant - Related',
  })
  category: string;

  @ApiProperty({
    description: 'When the signal was responded to',
    example: '2024-03-20T15:25:00Z',
  })
  respondedAt: Date;
}

export class ThemeDto {
  @ApiProperty({ description: 'Theme id', example: 1 })
  id: number;

  @ApiProperty({ description: 'Theme name', example: 'Nature-focused Walk' })
  name: string;
}

export class WalkLogDto {
  @ApiProperty({ description: 'Total distance in kilometers', example: '1.5' })
  @IsOptional()
  distance: number | null;

  @ApiProperty({
    description: 'When the walk was completed',
    example: '2024-03-20T15:30:00Z',
  })
  walkedAt: Date;

  @ApiProperty({
    description: 'Theme of the walk',
    type: ThemeDto,
  })
  theme: ThemeDto;

  @ApiProperty({
    description: 'Signals responded to during the walk',
    type: [RespondedSignalDto],
  })
  respondedSignals: RespondedSignalDto[];
}
