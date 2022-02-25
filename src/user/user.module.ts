import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { UserResolvers } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '1 day' },
    }),
  ],
  providers: [UserService, UserResolvers, PrismaService],
  exports: [UserService],
})
export class UserModule {}
