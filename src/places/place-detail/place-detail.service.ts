import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PlaceDetailsResponseDto } from './dto/place-details-response.dto';
import { PlaceDetailsDto } from './dto/place-details.dto';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
@Injectable()
export class PlaceDetailService {
  private readonly apikey: string;
  private readonly baseUrl =
    'https://maps.googleapis.com/maps/api/place/details/json';

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    const apikey = this.configService.get<string>('GOOGLE_PLACES_API_KEY');
    if (!apikey) {
      throw new Error(
        'GOOGLE_PLACES_API_KEY is not defined in environment variables',
      );
    }
    this.apikey = apikey;
  }

  async getPlaceDetail(dto: PlaceDetailsDto): Promise<PlaceDetailsResponseDto> {
    const { placeId } = dto;

    const params = {
      placeid: placeId,
      fields: 'geometry/location',
      key: this.apikey,
    };

    try {
      const response = await firstValueFrom(
        this.httpService.get(this.baseUrl, { params }),
      );

      const result = response.data.result;
      if (!result || !result.geometry || !result.geometry.location) {
        throw new Error('No data received from Google Places API');
      }

      const { lat, lng } = result.geometry.location;
      return { location: { lat, lng } };
    } catch (error) {
      throw new Error(`Failed to fetch place details: ${error.message}`);
    }
  }
}
