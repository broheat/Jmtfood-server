import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RestaurantWhereInput } from './restaurant-where.input';
import { RestaurantOrderByWithRelationInput } from './restaurant-order-by-with-relation.input';
import { RestaurantWhereUniqueInput } from './restaurant-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RestaurantCountAggregateInput } from './restaurant-count-aggregate.input';
import { RestaurantAvgAggregateInput } from './restaurant-avg-aggregate.input';
import { RestaurantSumAggregateInput } from './restaurant-sum-aggregate.input';
import { RestaurantMinAggregateInput } from './restaurant-min-aggregate.input';
import { RestaurantMaxAggregateInput } from './restaurant-max-aggregate.input';

@ArgsType()
export class RestaurantAggregateArgs {

    @Field(() => RestaurantWhereInput, {nullable:true})
    where?: RestaurantWhereInput;

    @Field(() => [RestaurantOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RestaurantOrderByWithRelationInput>;

    @Field(() => RestaurantWhereUniqueInput, {nullable:true})
    cursor?: RestaurantWhereUniqueInput;

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
