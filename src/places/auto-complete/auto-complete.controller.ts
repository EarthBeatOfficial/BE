import { Controller, Get, Query } from '@nestjs/common';
import { AutoCompleteService } from './auto-complete.service';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { PlaceSuggestionsDto } from './dto/place-suggestions.dto';
import { PlaceSuggestionsResponseDto } from './dto/place-suggestions-response.dto';

@ApiTags('Auto Complete')
@Controller('auto-complete')
export class AutoCompleteController {
  constructor(private readonly autoCompleteService: AutoCompleteService) {}

  @Get()
  @ApiOperation({ summary: 'Get location suggestions from Google Places API' })
  @ApiOkResponse({
    description: 'List of location suggestions',
    example: {
      predictions: [
        {
          description: 'New York, NY, USA',
          place_id: 'ChIJOwg_06VPwokRYvSEz3N7OCQ',
        },
        {
          description: 'New York City, NY, USA',
          place_id: 'ChIJOwg_06VPwokRYvSEz3N7OCQ',
        },
      ],
      status: 'OK',
    },
  })
  @ApiBadRequestResponse({
    description: 'Invalid input or missing required parameters',
    example: {
      message: 'Input parameter is required',
      error: 'Bad Request',
      statusCode: 400,
    },
  })
  async getPlaceSuggestions(
    @Query() dto: PlaceSuggestionsDto,
  ): Promise<PlaceSuggestionsResponseDto> {
    return this.autoCompleteService.getPlaceSuggestions(dto);
  }
}
