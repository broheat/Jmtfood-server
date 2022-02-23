import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class RestaurantInput {
  @Field({ nullable: true })
  area: String;
  @Field({ nullable: true })
  city: String;
  @Field({ nullable: true })
  foodType: String;
  @Field({ nullable: true })
  mainFood: String;
}
