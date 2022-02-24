import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RestaurantUpdateInput } from './restaurant-update.input';
import { RestaurantWhereUniqueInput } from './restaurant-where-unique.input';

@ArgsType()
export class UpdateOneRestaurantArgs {

    @Field(() => RestaurantUpdateInput, {nullable:false})
    data!: RestaurantUpdateInput;

    @Field(() => RestaurantWhereUniqueInput, {nullable:false})
    where!: RestaurantWhereUniqueInput;
}
