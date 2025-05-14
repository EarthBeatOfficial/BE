import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { HttpService } from '@nestjs/axios';
import { RecommendRouteDto, LocationDto } from './dto/recommend-route.dto';
import { DirectionsResponseDto } from './dto/directions-response.dto';
import { firstValueFrom } from 'rxjs';
import { RouteRepository } from './route.repository';
import { TravelMode } from '@googlemaps/google-maps-services-js';

interface AIResponse {
  route_name: string;
  coordinates: [number, number][];
}

@Injectable()
export class RouteService {
  constructor(
    private readonly routeRepository: RouteRepository,
    private httpService: HttpService,
  ) {}

  async recommendRoute(
    userId: number,
    dto: RecommendRouteDto,
  ): Promise<DirectionsResponseDto> {
    let location: LocationDto;
    try {
      location = JSON.parse(dto.location);
    } catch (error) {
      throw new BadRequestException(
        'Invalid location format. Expected JSON string with latitude and longitude.',
      );
    }

    const theme = await this.routeRepository.getThemeById(dto.themeId);
    if (!theme) {
      throw new NotFoundException(`Theme with ID ${dto.themeId} not found`);
    }

    // Send request to the AI server
    let aiResponse: AIResponse;
    try {
      const response = await firstValueFrom(
        this.httpService.post<AIResponse>(
          process.env.AI_SERVER_URL + '/recommend',
          {
            distance: dto.distance?.toString() ?? null,
            theme: theme.name,
            latitude: location.latitude,
            longitude: location.longitude,
          },
        ),
      );
      aiResponse = response.data;
    } catch (error) {
      throw new BadRequestException(
        'Failed to get route recommendation from AI server',
      );
    }

    if (
      !aiResponse ||
      !aiResponse.coordinates ||
      !Array.isArray(aiResponse.coordinates)
    ) {
      throw new BadRequestException(
        'Invalid response from AI server: missing or invalid coordinates',
      );
    }

    const route = await this.routeRepository.createRoute({
      userId,
      distance: dto.distance ?? null,
      themeId: dto.themeId,
      coordinates: aiResponse.coordinates,
    });

    // Format response for Google Maps Directions
    const coordinates = aiResponse.coordinates;
    const directionsResponse: DirectionsResponseDto = {
      origin: { lat: location.latitude, lng: location.longitude },
      destination: { lat: location.latitude, lng: location.longitude },
      waypoints: coordinates.slice(1, -1).map(([lat, lng]) => ({
        location: { lat, lng },
      })),
      travelMode: TravelMode.walking,
    };

    return directionsResponse;
  }
}
