import { registerEnumType } from '@nestjs/graphql';

export enum RestaurantScalarFieldEnum {
    id = "id",
    area = "area",
    city = "city",
    foodType = "foodType",
    mainFood = "mainFood",
    name = "name"
}


registerEnumType(RestaurantScalarFieldEnum, { name: 'RestaurantScalarFieldEnum', description: undefined })
