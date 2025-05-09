import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { HttpService } from '@nestjs/axios';
import { RecommendRouteDto } from './dto/recommend-route.dto';
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

  async recommendRoute(userId: number, dto: RecommendRouteDto) {
    const theme = await this.prisma.theme.findUnique({
      where: { id: dto.themeId },
    });

    if (!theme) {
      throw new NotFoundException(`Theme with ID ${dto.themeId} not found`);
    }

    // Send request to AI server
    const response = await firstValueFrom(
      this.httpService.post<AIResponse>(process.env.AI_SERVER_URL + '/recommend-route', {
        startLocation: {
          lat: dto.lat,
          lng: dto.lng,
        },
        theme: theme.name,
        distance: dto.distance,
      }),
    );

    // Create route in database
    const route = await this.prisma.route.create({
      data: {
        userId,
        distance: dto.distance,
        themeId: dto.themeId,
        points: {
          create: response.data.coordinates.map(([lng, lat], index) => ({
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

    return {
      route,
      coordinates: response.data.coordinates,
    };
  }

  async findRoutesByUser(userId: number) {
    return this.prisma.route.findMany({
      where: { userId },
      include: {
        points: true,
        theme: true,
      },
    });
  }
} 