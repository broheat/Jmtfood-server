import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field((type) => Int)
  id: number;

  @Field((type) => Int)
  kakaoId: number;

  @Field()
  userName: string;

  @Field((type) => Date)
  createdAt: Date;

  @Field((type) => Date)
  updatedAt: Date;
}

@ObjectType()
export class GetUser {
  @Field((type) => User)
  getUser: User;
}

@ObjectType()
export class CheckNewUer {
  @Field()
  status: string;

  @Field()
  userId: number;
}
