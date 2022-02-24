import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AccountWhereInput } from './account-where.input';

@ArgsType()
export class DeleteManyAccountArgs {

    @Field(() => AccountWhereInput, {nullable:true})
    where?: AccountWhereInput;
}
