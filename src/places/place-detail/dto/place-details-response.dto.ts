import { ApiProperty } from '@nestjs/swagger';

export class PlaceDetailsResponseDto {
  @ApiProperty({
    description: 'Latitude and Longitude of the place',
    example: {
      lat: 37.586288,
      lng: 127.0261105,
    },
  })
  location: {
    lat: number;
    lng: number;
  };
}
