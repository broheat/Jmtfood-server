import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { RestaurantService } from './restaurant.service';
import { RestaurantResolver } from './restaurants.resolver';

@Module({
  providers: [RestaurantResolver, RestaurantService, PrismaService],
})
export class RestaurantModule {}
