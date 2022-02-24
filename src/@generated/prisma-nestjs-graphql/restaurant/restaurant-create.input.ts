import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RestaurantCreateInput {

    @Field(() => String, {nullable:false})
    area!: string;

    @Field(() => String, {nullable:false})
    city!: string;

    @Field(() => String, {nullable:false})
    foodType!: string;

    @Field(() => String, {nullable:true})
    mainFood?: string;

    @Field(() => String, {nullable:false})
    name!: string;
}
