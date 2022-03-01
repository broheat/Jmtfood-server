import { Injectable } from '@nestjs/common';
import { Restaurant } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RestaurantService {
  constructor(private prisma: PrismaService) {}

  async restaurant(id: number): Promise<Restaurant | null> {
    return this.prisma.restaurant.findUnique({
      where: {
        id,
      },
    });
  }

  async seeRestaurants(
    area: string | null,
    city: string | null,
    foodType: string | null,
    mainFood: string | null,
  ): Promise<Restaurant[]> {
    return this.prisma.restaurant.findMany({
      where: {
        area,
        city,
        foodType,
        mainFood,
      },
    });
  }
}
