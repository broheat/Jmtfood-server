
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export abstract class IMutation {
    abstract kakaoLogin(accessToken: string): Nullable<string> | Promise<Nullable<string>>;
}

export class Restaurant {
    id: string;
    area: string;
    city: string;
    foodType: string;
    mainFood?: Nullable<string>;
    name: string;
}

export abstract class IQuery {
    abstract restaurant(id: string): Nullable<Restaurant> | Promise<Nullable<Restaurant>>;

    abstract seeRestaurants(area?: Nullable<string>, city?: Nullable<string>, foodType?: Nullable<string>, mainFood?: Nullable<string>): Restaurant[] | Promise<Restaurant[]>;
}

type Nullable<T> = T | null;
