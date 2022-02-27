import { Module } from '@nestjs/common';
import { JwtStrategy } from './jwt.strategy';
import { AuthResolvers } from './auth.resolver';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma.service';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { GqlAuthGuard } from './auth.guard';
@Module({
  imports: [
    UserModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '1 day' },
    }),
  ],
  providers: [
    { provide: APP_GUARD, useClass: GqlAuthGuard },
    JwtStrategy,
    AuthResolvers,
    AuthService,
    PrismaService,
  ],
  exports: [JwtModule, PassportModule],
})
export class AuthModule {}
