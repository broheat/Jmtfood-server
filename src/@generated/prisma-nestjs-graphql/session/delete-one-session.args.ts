import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionWhereUniqueInput } from './session-where-unique.input';

@ArgsType()
export class DeleteOneSessionArgs {

    @Field(() => SessionWhereUniqueInput, {nullable:false})
    where!: SessionWhereUniqueInput;
}
