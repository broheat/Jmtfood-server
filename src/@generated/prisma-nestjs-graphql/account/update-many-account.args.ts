import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AccountUpdateManyMutationInput } from './account-update-many-mutation.input';
import { AccountWhereInput } from './account-where.input';

@ArgsType()
export class UpdateManyAccountArgs {

    @Field(() => AccountUpdateManyMutationInput, {nullable:false})
    data!: AccountUpdateManyMutationInput;

    @Field(() => AccountWhereInput, {nullable:true})
    where?: AccountWhereInput;
}
