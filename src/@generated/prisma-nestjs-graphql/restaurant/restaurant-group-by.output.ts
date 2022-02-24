import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RestaurantCountAggregate } from './restaurant-count-aggregate.output';
import { RestaurantAvgAggregate } from './restaurant-avg-aggregate.output';
import { RestaurantSumAggregate } from './restaurant-sum-aggregate.output';
import { RestaurantMinAggregate } from './restaurant-min-aggregate.output';
import { RestaurantMaxAggregate } from './restaurant-max-aggregate.output';

@ObjectType()
export class RestaurantGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

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

    @Field(() => RestaurantCountAggregate, {nullable:true})
    _count?: RestaurantCountAggregate;

    @Field(() => RestaurantAvgAggregate, {nullable:true})
    _avg?: RestaurantAvgAggregate;

    @Field(() => RestaurantSumAggregate, {nullable:true})
    _sum?: RestaurantSumAggregate;

    @Field(() => RestaurantMinAggregate, {nullable:true})
    _min?: RestaurantMinAggregate;

    @Field(() => RestaurantMaxAggregate, {nullable:true})
    _max?: RestaurantMaxAggregate;
}
