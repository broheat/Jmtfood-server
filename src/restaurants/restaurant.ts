import { Field, ObjectType, ID, Int } from '@nestjs/graphql';
import 'reflect-metadata';

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

  @Field((type) => String, { nullable: true })
  mainFood: String | null;

  @Field((type) => String)
  name: String;
}
