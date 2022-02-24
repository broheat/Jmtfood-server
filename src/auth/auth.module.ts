import { Module } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthResolvers } from './auth.resolver';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: 3600 },
    }),
  ],
  providers: [AuthResolvers, AuthService, UserService, PrismaService],
})
export class AuthModule {}
