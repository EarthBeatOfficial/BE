import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class PlaceDetailsDto {
  @ApiProperty({
    description: 'The place_id of the place',
    example: 'ChIJly7i_Lq8fDURFlJjiBok1aY',
  })
  @IsString()
  @IsNotEmpty()
  placeId: string;
}
