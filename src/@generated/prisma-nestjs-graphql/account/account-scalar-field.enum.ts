import { registerEnumType } from '@nestjs/graphql';

export enum AccountScalarFieldEnum {
    id = "id",
    userId = "userId",
    refreshToken = "refreshToken",
    accessToken = "accessToken",
    accessTokenExpires = "accessTokenExpires",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(AccountScalarFieldEnum, { name: 'AccountScalarFieldEnum', description: undefined })
