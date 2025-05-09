import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { HttpService } from '@nestjs/axios';
import { RecommendRouteDto, LocationDto } from './dto/recommend-route.dto';
import { DirectionsResponseDto } from './dto/directions-response.dto';
import { firstValueFrom } from 'rxjs';

interface AIResponse {
  route_name: string;
  coordinates: [number, number][];
}

@Injectable()
export class RouteService {
  constructor(
    private prisma: PrismaService,
    private httpService: HttpService,
  ) {}

  async recommendRoute(userId: number, dto: RecommendRouteDto): Promise<DirectionsResponseDto> {
    // Parse the location JSON string
    let location: LocationDto;
    try {
      location = JSON.parse(dto.location);
    } catch (error) {
      throw new BadRequestException('Invalid location format. Expected JSON string with latitude and longitude.');
    }

    const theme = await this.prisma.theme.findUnique({
      where: { id: dto.themeId },
    });

    if (!theme) {
      throw new NotFoundException(`Theme with ID ${dto.themeId} not found`);
    }

    // Send request to AI server
    const request = await firstValueFrom(
      this.httpService.post<AIResponse>(process.env.AI_SERVER_URL + '/recommend', {
        distance: dto.distance.toString(),
        theme: theme.name,
        latitude: location.latitude,
        longitude: location.longitude,
      }),
    );

    // Create route in database
    const route = await this.prisma.route.create({
      data: {
        userId,
        distance: dto.distance,
        themeId: dto.themeId,
        points: {
          create: request.data.coordinates.map(([lat, lng], index) => ({
            lat,
            lng,
            order: index,
          })),
        },
      },
      include: {
        points: true,
        theme: true,
      },
    });

    // Format response for Google Maps Directions
    const coordinates = request.data.coordinates;
    const directionsResponse: DirectionsResponseDto = {
      origin: { lat: location.latitude, lng: location.longitude },
      destination: { lat: location.latitude, lng: location.longitude },
      waypoints: coordinates.slice(1, -1).map(([lng, lat]) => ({
        location: { lat, lng },
      })),
      travelMode: 'google.maps.TravelMode.WALKING',
    };

    return directionsResponse;
  }
} 