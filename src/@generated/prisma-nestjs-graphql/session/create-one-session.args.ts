import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionCreateInput } from './session-create.input';

@ArgsType()
export class CreateOneSessionArgs {

    @Field(() => SessionCreateInput, {nullable:false})
    data!: SessionCreateInput;
}
