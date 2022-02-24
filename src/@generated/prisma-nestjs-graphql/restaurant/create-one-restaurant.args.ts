import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RestaurantCreateInput } from './restaurant-create.input';

@ArgsType()
export class CreateOneRestaurantArgs {

    @Field(() => RestaurantCreateInput, {nullable:false})
    data!: RestaurantCreateInput;
}
