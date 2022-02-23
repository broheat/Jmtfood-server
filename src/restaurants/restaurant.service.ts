import { Injectable } from '@nestjs/common';
import { Restaurant } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RestaurantService {
  constructor(private prisma: PrismaService) {}

  async restaurant(id: string): Promise<Restaurant | null> {
    return this.prisma.restaurant.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  }
  async seeRestaurants(
    area: string,
    city: string,
    foodType: string,
    mainFood: string,
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
