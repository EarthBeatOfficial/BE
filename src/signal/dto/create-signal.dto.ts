import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNotEmpty, Min, Max } from 'class-validator';

export class CreateSignalDto {
  @ApiProperty({
    description: 'Title of the signal',
    example: 'Help needed with recycling',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Detailed description of the signal',
    example: 'Need help sorting recyclables at the community center',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'Latitude coordinate of the signal location',
    example: 37.5665,
  })
  @IsNumber()
  @Min(-90)
  @Max(90)
  lat: number;

  @ApiProperty({
    description: 'Longitude coordinate of the signal location',
    example: 126.978,
  })
  @IsNumber()
  @Min(-180)
  @Max(180)
  lng: number;

  @ApiProperty({
    description: 'Time limit in minutes for completing the signal',
    example: 30,
    minimum: 10,
    maximum: 180,
  })
  @IsNumber()
  @Min(10)
  @Max(180)
  timeLimit: number;

  @ApiProperty({
    description: 'ID of the signal category',
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  categoryId: number;
}
