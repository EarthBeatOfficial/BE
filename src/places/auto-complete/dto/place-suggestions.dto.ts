import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class PlaceSuggestionsDto {
  @ApiProperty({
    description: 'The search input text',
    example: '안암동',
  })
  @IsString()
  input: string;
}
