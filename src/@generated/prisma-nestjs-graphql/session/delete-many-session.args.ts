import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionWhereInput } from './session-where.input';

@ArgsType()
export class DeleteManySessionArgs {

    @Field(() => SessionWhereInput, {nullable:true})
    where?: SessionWhereInput;
}
