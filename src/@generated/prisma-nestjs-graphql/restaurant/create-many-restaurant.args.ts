import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RestaurantCreateManyInput } from './restaurant-create-many.input';

@ArgsType()
export class CreateManyRestaurantArgs {

    @Field(() => [RestaurantCreateManyInput], {nullable:false})
    data!: Array<RestaurantCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
