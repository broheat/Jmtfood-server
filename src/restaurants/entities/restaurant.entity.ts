import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Restaurant {
  @Field((type) => Int)
  id: number;
  @Field((type) => String)
  area: String;
  @Field((type) => String)
  city: String;
  @Field((type) => String)
  foodType: String;
  @Field((type) => String)
  mainFood: String;
  @Field((type) => String)
  name: String;
}

@ObjectType()
export class seeRestaurantsResult {
  @Field((type) => Boolean)
  ok: Boolean;
  @Field((type) => [Restaurant])
  restaurant: Restaurant[];
}
