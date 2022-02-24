import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AccountCreateInput } from './account-create.input';

@ArgsType()
export class CreateOneAccountArgs {

    @Field(() => AccountCreateInput, {nullable:false})
    data!: AccountCreateInput;
}
