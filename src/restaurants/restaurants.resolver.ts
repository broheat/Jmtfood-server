import { Resolver, Query, Args } from '@nestjs/graphql';
import { Restaurant, SeeRestaurants } from './restaurant.model';
import { RestaurantService } from './restaurant.service';

@Resolver('Restaurant')
export class RestaurantResolvers {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Query((returns) => Restaurant)
  async restaurant(@Args('id') args: string) {
    return this.restaurantService.restaurant(args);
  }

  @Query((returns) => SeeRestaurants)
  async seeRestaurants(
    @Args('area') area: string,
    @Args('city') city: string,
    @Args('foodType') foodType: string,
    @Args('mainFood') mainFood: string,
  ) {
    return this.restaurantService.seeRestaurants(
      area,
      city,
      foodType,
      mainFood,
    );
  }
}
