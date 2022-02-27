import { Resolver, Query, Args } from '@nestjs/graphql';
import { Restaurant, SeeRestaurants } from './restaurant.model';
import { RestaurantService } from './restaurant.service';

@Resolver('Restaurant')
export class RestaurantResolvers {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Query((returns) => Restaurant)
  async restaurant(@Args('id') id: number) {
    return this.restaurantService.restaurant(id);
  }

  @Query((returns) => [Restaurant])
  async seeRestaurants(
    @Args('area', { nullable: true }) area?: string,
    @Args('city', { nullable: true }) city?: string,
    @Args('foodType', { nullable: true }) foodType?: string,
    @Args('mainFood', { nullable: true }) mainFood?: string,
  ): Promise<Restaurant[]> {
    return this.restaurantService.seeRestaurants(
      area,
      city,
      foodType,
      mainFood,
    );
  }
}
