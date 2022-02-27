import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';

@Resolver('Auth')
export class AuthResolvers {
  constructor(private authService: AuthService) {}

  @Mutation((returns) => String)
  async kakaoLogin(@Args('accessToken') accessToken: string): Promise<string> {
    return await this.authService.kakaoLogin(accessToken);
  }
}
