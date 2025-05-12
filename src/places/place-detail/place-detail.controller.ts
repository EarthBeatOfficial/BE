import { Controller, Get, Query } from '@nestjs/common';
import { PlaceDetailService } from './place-detail.service';
import { PlaceDetailsDto } from './dto/place-details.dto';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { PlaceDetailsResponseDto } from './dto/place-details-response.dto';

@ApiTags('Place Detail')
@Controller('place-detail')
export class PlaceDetailController {
  constructor(private readonly placeDetailService: PlaceDetailService) {}

  @Get()
  @ApiOperation({ summary: 'Get lat/lng of a place by the place_id' })
  @ApiOkResponse({
    description: 'The lat/lng of the place',
    type: PlaceDetailsResponseDto,
  })
  @ApiBadRequestResponse({
    description: 'Invalid or missing place_id',
    example: {
      message: 'Invalid or missing place_id',
      error: 'Bad Request',
      statusCode: 400,
    },
  })
  async getPlaceDetail(
    @Query() dto: PlaceDetailsDto,
  ): Promise<PlaceDetailsResponseDto> {
    return this.placeDetailService.getPlaceDetail(dto);
  }
}
