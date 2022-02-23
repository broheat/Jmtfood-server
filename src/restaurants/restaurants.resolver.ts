import { Args, Query, Resolver } from '@nestjs/graphql';
import { RestaurantInput } from './dtos/restaurants.dto';
import { Restaurant, seeRestaurantsResult } from './entities/restaurant.entity';

@Resolver()
export class RestaurantsResolver {
  @Query((returns) => seeRestaurantsResult)
  seeRestaurants(
    @Args() restaurantInput: RestaurantInput,
  ): seeRestaurantsResult {
    return;
    true;
  }
}
