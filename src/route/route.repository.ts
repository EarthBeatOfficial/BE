import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RecommendRouteDto } from './dto/recommend-route.dto';

interface createRouteParams {
  userId: number;
  distance: number | null;
  themeId: number;
  coordinates: [number, number][];
}

@Injectable()
export class RouteRepository {
  constructor(private prisma: PrismaService) {}

  async getThemeById(themeId: number) {
    return this.prisma.theme.findUnique({
      where: { id: themeId },
    });
  }

  async createRoute(params: createRouteParams) {
    const { userId, distance, themeId, coordinates } = params;
    return this.prisma.route.create({
      data: {
        userId,
        distance,
        themeId,
        points: {
          create: coordinates.map(([lat, lng], index) => ({
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
  }
}
