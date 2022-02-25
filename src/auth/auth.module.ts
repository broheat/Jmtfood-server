import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { APP_GUARD } from '@nestjs/core';
import { GqlAuthGuard } from './auth.guard';
import { UserModule } from 'src/user/user.module';
import { AuthResolvers } from './auth.resolver';
import { AuthService } from './auth.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '1 day' },
    }),
    UserModule,
  ],
  providers: [
    JwtStrategy,
    { provide: APP_GUARD, useClass: GqlAuthGuard },
    AuthResolvers,
    AuthService,
  ],
})
export class AuthModule {}
