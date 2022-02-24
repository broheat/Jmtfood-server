import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class RestaurantWhereInput {

    @Field(() => [RestaurantWhereInput], {nullable:true})
    AND?: Array<RestaurantWhereInput>;

    @Field(() => [RestaurantWhereInput], {nullable:true})
    OR?: Array<RestaurantWhereInput>;

    @Field(() => [RestaurantWhereInput], {nullable:true})
    NOT?: Array<RestaurantWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    area?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    city?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    foodType?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    mainFood?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;
}
