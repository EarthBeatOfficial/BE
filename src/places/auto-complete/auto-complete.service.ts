import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { PlaceSuggestionsDto } from './dto/place-suggestions.dto';

@Injectable()
export class AutoCompleteService {
  private readonly apiKey: string;
  private readonly baseUrl =
    'https://maps.googleapis.com/maps/api/place/autocomplete/json';

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    const apiKey = this.configService.get<string>('GOOGLE_PLACES_API_KEY');
    if (!apiKey) {
      throw new Error(
        'GOOGLE_PLACES_API_KEY is not defined in environment variables',
      );
    }
    this.apiKey = apiKey;
  }

  async getPlaceSuggestions(dto: PlaceSuggestionsDto) {
    const { input } = dto;

    const params = {
      input,
      key: this.apiKey,
    };

    try {
      const response = await firstValueFrom(
        this.httpService.get(this.baseUrl, { params }),
      );

      const rawData = response.data.predictions as any[];
      const predictions = rawData.map((prediction) => ({
        description: prediction.description,
        place_id: prediction.place_id,
      }));

      return { predictions };
    } catch (error) {
      throw new Error(`Failed to fetch place suggestions: ${error.message}`);
    }
  }
}
