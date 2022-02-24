import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AccountCreateManyInput } from './account-create-many.input';

@ArgsType()
export class CreateManyAccountArgs {

    @Field(() => [AccountCreateManyInput], {nullable:false})
    data!: Array<AccountCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
