import { IsInt } from 'class-validator';

export class StartSessionDto {
  @IsInt()
  userId: number;

  @IsInt()
  routeId: number;
}
