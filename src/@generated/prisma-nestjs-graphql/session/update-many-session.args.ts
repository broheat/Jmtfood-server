import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionUpdateManyMutationInput } from './session-update-many-mutation.input';
import { SessionWhereInput } from './session-where.input';

@ArgsType()
export class UpdateManySessionArgs {

    @Field(() => SessionUpdateManyMutationInput, {nullable:false})
    data!: SessionUpdateManyMutationInput;

    @Field(() => SessionWhereInput, {nullable:true})
    where?: SessionWhereInput;
}
