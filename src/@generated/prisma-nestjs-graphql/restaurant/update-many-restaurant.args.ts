import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RestaurantUpdateManyMutationInput } from './restaurant-update-many-mutation.input';
import { RestaurantWhereInput } from './restaurant-where.input';

@ArgsType()
export class UpdateManyRestaurantArgs {

    @Field(() => RestaurantUpdateManyMutationInput, {nullable:false})
    data!: RestaurantUpdateManyMutationInput;

    @Field(() => RestaurantWhereInput, {nullable:true})
    where?: RestaurantWhereInput;
}
