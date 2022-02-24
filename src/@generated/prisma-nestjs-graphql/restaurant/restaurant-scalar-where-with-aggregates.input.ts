import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class RestaurantScalarWhereWithAggregatesInput {

    @Field(() => [RestaurantScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RestaurantScalarWhereWithAggregatesInput>;

    @Field(() => [RestaurantScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RestaurantScalarWhereWithAggregatesInput>;

    @Field(() => [RestaurantScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RestaurantScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    area?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    city?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    foodType?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    mainFood?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
