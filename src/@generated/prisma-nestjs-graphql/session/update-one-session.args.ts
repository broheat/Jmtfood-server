import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionUpdateInput } from './session-update.input';
import { SessionWhereUniqueInput } from './session-where-unique.input';

@ArgsType()
export class UpdateOneSessionArgs {

    @Field(() => SessionUpdateInput, {nullable:false})
    data!: SessionUpdateInput;

    @Field(() => SessionWhereUniqueInput, {nullable:false})
    where!: SessionWhereUniqueInput;
}
