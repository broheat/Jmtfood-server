import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { AccountCreateInput } from './account-create.input';
import { AccountUpdateInput } from './account-update.input';

@ArgsType()
export class UpsertOneAccountArgs {

    @Field(() => AccountWhereUniqueInput, {nullable:false})
    where!: AccountWhereUniqueInput;

    @Field(() => AccountCreateInput, {nullable:false})
    create!: AccountCreateInput;

    @Field(() => AccountUpdateInput, {nullable:false})
    update!: AccountUpdateInput;
}
