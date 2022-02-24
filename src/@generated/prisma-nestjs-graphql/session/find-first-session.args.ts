import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionWhereInput } from './session-where.input';
import { SessionOrderByWithRelationInput } from './session-order-by-with-relation.input';
import { SessionWhereUniqueInput } from './session-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SessionScalarFieldEnum } from './session-scalar-field.enum';

@ArgsType()
export class FindFirstSessionArgs {

    @Field(() => SessionWhereInput, {nullable:true})
    where?: SessionWhereInput;

    @Field(() => [SessionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SessionOrderByWithRelationInput>;

    @Field(() => SessionWhereUniqueInput, {nullable:true})
    cursor?: SessionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SessionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SessionScalarFieldEnum>;
}
