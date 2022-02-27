import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Restaurant {
  @Field((type) => Int)
  id: number;

  @Field()
  area: string;

  @Field()
  city: string;

  @Field()
  foodType: string;

  @Field({ nullable: true })
  mainFood: string;

  @Field()
  name: string;
}

@ObjectType()
export class SeeRestaurants {
  @Field((type) => [Restaurant])
  seeRestaurants: Restaurant[];
}
