import { registerEnumType } from '@nestjs/graphql';

export enum SessionScalarFieldEnum {
    id = "id",
    userId = "userId",
    expires = "expires",
    sessionToken = "sessionToken",
    accessToken = "accessToken",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(SessionScalarFieldEnum, { name: 'SessionScalarFieldEnum', description: undefined })
