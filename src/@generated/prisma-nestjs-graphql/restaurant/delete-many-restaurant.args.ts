import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RestaurantWhereInput } from './restaurant-where.input';

@ArgsType()
export class DeleteManyRestaurantArgs {

    @Field(() => RestaurantWhereInput, {nullable:true})
    where?: RestaurantWhereInput;
}
