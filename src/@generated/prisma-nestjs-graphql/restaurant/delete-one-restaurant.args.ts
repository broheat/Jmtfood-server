import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RestaurantWhereUniqueInput } from './restaurant-where-unique.input';

@ArgsType()
export class DeleteOneRestaurantArgs {

    @Field(() => RestaurantWhereUniqueInput, {nullable:false})
    where!: RestaurantWhereUniqueInput;
}
