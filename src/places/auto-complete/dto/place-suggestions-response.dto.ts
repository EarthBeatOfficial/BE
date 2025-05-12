import { ApiProperty } from '@nestjs/swagger';

export class PlaceSuggestionsResponseDto {
  @ApiProperty({
    description: 'List of place predictions',
    example: [
      {
        description: 'South Korea, Seoul, Seongbuk District, 안암동',
        place_id: 'ChIJly7i_Lq8fDURFlJjiBok1aY',
      },
    ],
  })
  predictions: {
    description: string;
    place_id: string;
  }[];
}
