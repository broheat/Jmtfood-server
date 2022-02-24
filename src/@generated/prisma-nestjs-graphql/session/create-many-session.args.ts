import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionCreateManyInput } from './session-create-many.input';

@ArgsType()
export class CreateManySessionArgs {

    @Field(() => [SessionCreateManyInput], {nullable:false})
    data!: Array<SessionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
