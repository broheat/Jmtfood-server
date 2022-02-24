import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RestaurantWhereUniqueInput } from './restaurant-where-unique.input';
import { RestaurantCreateInput } from './restaurant-create.input';
import { RestaurantUpdateInput } from './restaurant-update.input';

@ArgsType()
export class UpsertOneRestaurantArgs {

    @Field(() => RestaurantWhereUniqueInput, {nullable:false})
    where!: RestaurantWhereUniqueInput;

    @Field(() => RestaurantCreateInput, {nullable:false})
    create!: RestaurantCreateInput;

    @Field(() => RestaurantUpdateInput, {nullable:false})
    update!: RestaurantUpdateInput;
}
