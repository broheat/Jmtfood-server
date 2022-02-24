import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RestaurantAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
