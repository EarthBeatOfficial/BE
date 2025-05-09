import { IsNumber, IsPositive } from 'class-validator';

export class RecommendRouteDto {
  @IsNumber()
  lat: number;

  @IsNumber()
  lng: number;

  @IsNumber()
  @IsPositive()
  themeId: number;

  @IsNumber()
  @IsPositive()
  distance: number;
} 