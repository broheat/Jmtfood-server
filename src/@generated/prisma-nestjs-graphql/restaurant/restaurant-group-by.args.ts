import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RestaurantWhereInput } from './restaurant-where.input';
import { RestaurantOrderByWithAggregationInput } from './restaurant-order-by-with-aggregation.input';
import { RestaurantScalarFieldEnum } from './restaurant-scalar-field.enum';
import { RestaurantScalarWhereWithAggregatesInput } from './restaurant-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { RestaurantCountAggregateInput } from './restaurant-count-aggregate.input';
import { RestaurantAvgAggregateInput } from './restaurant-avg-aggregate.input';
import { RestaurantSumAggregateInput } from './restaurant-sum-aggregate.input';
import { RestaurantMinAggregateInput } from './restaurant-min-aggregate.input';
import { RestaurantMaxAggregateInput } from './restaurant-max-aggregate.input';

@ArgsType()
export class RestaurantGroupByArgs {

    @Field(() => RestaurantWhereInput, {nullable:true})
    where?: RestaurantWhereInput;

    @Field(() => [RestaurantOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RestaurantOrderByWithAggregationInput>;

    @Field(() => [RestaurantScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof RestaurantScalarFieldEnum>;

    @Field(() => RestaurantScalarWhereWithAggregatesInput, {nullable:true})
    having?: RestaurantScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RestaurantCountAggregateInput, {nullable:true})
    _count?: RestaurantCountAggregateInput;

    @Field(() => RestaurantAvgAggregateInput, {nullable:true})
    _avg?: RestaurantAvgAggregateInput;

    @Field(() => RestaurantSumAggregateInput, {nullable:true})
    _sum?: RestaurantSumAggregateInput;

    @Field(() => RestaurantMinAggregateInput, {nullable:true})
    _min?: RestaurantMinAggregateInput;

    @Field(() => RestaurantMaxAggregateInput, {nullable:true})
    _max?: RestaurantMaxAggregateInput;
}
