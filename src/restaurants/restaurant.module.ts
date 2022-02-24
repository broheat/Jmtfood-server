import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { RestaurantService } from './restaurant.service';
import { RestaurantResolvers } from './restaurants.resolver';

@Module({
  providers: [RestaurantResolvers, RestaurantService, PrismaService],
})
export class RestaurantModule {}
