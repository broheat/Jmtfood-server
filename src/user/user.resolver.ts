import { UseGuards } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/auth-user.decorator';
import { GqlAuthGuard } from 'src/auth/auth.guard';
import { User } from './user.model';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolvers {
  constructor(private userService: UserService) {}

  @UseGuards(GqlAuthGuard)
  @Query((returns) => User)
  async getUser(@CurrentUser() user) {
    return await this.userService.getUserById(user.userId);
  }
}
