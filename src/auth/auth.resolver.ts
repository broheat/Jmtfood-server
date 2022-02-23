import { PrismaService } from 'src/prisma.service';
import { Inject } from '@nestjs/common';

export class AuthResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}
}
