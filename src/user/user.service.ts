import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getUserById(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }
  async getUserByKakaoId(kakaoId: number): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { kakaoId } });
  }

  async checkNewUser(kakaoId: number): Promise<object | null> {
    try {
      const user = await this.getUserByKakaoId(kakaoId);
      if (user) {
        return { status: 'login', userId: user.id };
      } else {
        const user = await this.createUser(kakaoId);
        return { status: 'create', userId: user.id };
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  async createUser(kakaoId: number): Promise<User | null> {
    try {
      const userName = kakaoId.toString();
      const user = await this.prisma.user.create({
        data: { kakaoId, userName },
      });
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }
}
