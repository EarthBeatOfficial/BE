import { IsNumber, IsPositive, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class LocationDto {
  @ApiProperty({ description: 'Latitude', example: 37.544582 })
  @IsNumber()
  @Type(() => Number)
  latitude: number;

  @ApiProperty({ description: 'Longitude', example: 127.037589 })
  @IsNumber()
  @Type(() => Number)
  longitude: number;
}

export class RecommendRouteDto {
  @ApiProperty({ description: 'User ID', example: 1 })
  @IsNumber()
  @Type(() => Number)
  userId: number;

  @ApiProperty({
    description: 'Starting location as JSON string',
    example: '{"latitude": 37.544582, "longitude": 127.037589}',
  })
  @IsString()
  location: string;

  @ApiProperty({ description: 'Theme ID', example: 1 })
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  themeId: number;

  @ApiProperty({ description: 'Distance in kilometers', example: 2.5 })
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  distance: number;
}
