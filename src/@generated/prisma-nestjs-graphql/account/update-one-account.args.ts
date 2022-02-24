import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AccountUpdateInput } from './account-update.input';
import { AccountWhereUniqueInput } from './account-where-unique.input';

@ArgsType()
export class UpdateOneAccountArgs {

    @Field(() => AccountUpdateInput, {nullable:false})
    data!: AccountUpdateInput;

    @Field(() => AccountWhereUniqueInput, {nullable:false})
    where!: AccountWhereUniqueInput;
}
