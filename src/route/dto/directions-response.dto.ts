import { ApiProperty } from '@nestjs/swagger';

export class DirectionsResponseDto {
  @ApiProperty({ description: 'Unique identifier for the route' })
  id: number;

  @ApiProperty({ description: 'Starting point coordinates' })
  origin: { lat: number; lng: number };

  @ApiProperty({ description: 'Ending point coordinates' })
  destination: { lat: number; lng: number };

  @ApiProperty({ description: 'Intermediate points' })
  waypoints: { location: { lat: number; lng: number } }[];

  @ApiProperty({
    description: 'Travel mode',
    example: 'google.maps.TravelMode.WALKING',
  })
  travelMode: string;
}
