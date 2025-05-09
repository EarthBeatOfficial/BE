import { ApiProperty } from '@nestjs/swagger';

export class SignalResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: "Help needed with recycling" })
  title: string;

  @ApiProperty({ example: "Need help sorting recyclables at the community center" })
  description: string;

  @ApiProperty({ example: 37.5665 })
  lat: number;

  @ApiProperty({ example: 126.9780 })
  lng: number;

  @ApiProperty({ example: 30 })
  timeLimit: number;

  @ApiProperty({ 
    example: {
      id: 1,
      name: "Water Plants / Plant - Related"
    }
  })
  category: {
    id: number;
    name: string;
  };

  @ApiProperty({ example: "PENDING" })
  status: string;

  @ApiProperty({ example: "2024-03-20T10:00:00Z" })
  createdAt: string;
} 