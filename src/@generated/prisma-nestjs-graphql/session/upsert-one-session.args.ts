import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionWhereUniqueInput } from './session-where-unique.input';
import { SessionCreateInput } from './session-create.input';
import { SessionUpdateInput } from './session-update.input';

@ArgsType()
export class UpsertOneSessionArgs {

    @Field(() => SessionWhereUniqueInput, {nullable:false})
    where!: SessionWhereUniqueInput;

    @Field(() => SessionCreateInput, {nullable:false})
    create!: SessionCreateInput;

    @Field(() => SessionUpdateInput, {nullable:false})
    update!: SessionUpdateInput;
}
