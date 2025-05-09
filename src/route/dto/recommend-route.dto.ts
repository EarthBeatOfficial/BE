import { IsNumber, IsPositive, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LocationDto {
  @ApiProperty({ description: 'Latitude', example: 37.544582 })
  @IsNumber()
  latitude: number;

  @ApiProperty({ description: 'Longitude', example: 127.037589 })
  @IsNumber()
  longitude: number;
}

export class RecommendRouteDto {
  @ApiProperty({
    description: 'Starting location as JSON string',
    example: '{"latitude": 37.544582, "longitude": 127.037589}',
  })
  @IsString()
  location: string;

  @ApiProperty({ description: 'Theme ID', example: 1 })
  @IsNumber()
  @IsPositive()
  themeId: number;

  @ApiProperty({ description: 'Distance in kilometers', example: 2.5 })
  @IsNumber()
  @IsPositive()
  distance: number;
}
