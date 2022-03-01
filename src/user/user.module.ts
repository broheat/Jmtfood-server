import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '1 day' },
    }),
  ],
  providers: [UserService, UserResolver, PrismaService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
