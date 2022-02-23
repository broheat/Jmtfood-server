import { Inject } from '@nestjs/common';
import {
  Args,
  Context,
  Field,
  InputType,
  registerEnumType,
  Resolver,
  Query,
} from '@nestjs/graphql';
import 'reflect-metadata';
import { PrismaService } from 'src/prisma.service';
import { Restaurant } from './restaurant';

@Resolver(Restaurant)
export class RestaurantResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query((returns) => [Restaurant])
  seeRestaurants(
    @Args('area', { nullable: true }) area: string,
    @Args('city', { nullable: true }) city: string,
    @Args('foodType', { nullable: true }) foodType: string,
    @Args('mainFood', { nullable: true }) mainFood: string,
    @Args('skip', { nullable: true }) skip: number,
    @Args('take', { nullable: true }) take: number,
    @Context() ctx,
  ) {
    return this.prismaService.restaurant.findMany({
      where: { area, city, foodType, mainFood },
      take: take || undefined,
      skip: skip || undefined,
    });
  }
}
