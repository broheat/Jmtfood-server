import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AccountWhereUniqueInput } from './account-where-unique.input';

@ArgsType()
export class FindUniqueAccountArgs {

    @Field(() => AccountWhereUniqueInput, {nullable:false})
    where!: AccountWhereUniqueInput;
}
