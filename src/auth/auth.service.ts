import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import fetch from 'node-fetch-commonjs';
import { CheckNewUer } from 'src/user/user.model';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async setRefreshToken({ user, res }) {
    const refreshToken = this.jwtService.sign(
      { sub: user.id },
      { secret: process.env.SECRET_KEY, expiresIn: '2w' },
    );
    res.setHeader('Set-Cookie', `refreshToken=${refreshToken}; path=/;`);
  }

  async kakaoLogin(accessToken: string): Promise<string> {
    const response = await fetch('https://kapi.kakao.com/v2/user/me', {
      method: 'GET',
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const result = await response.text();

    try {
      if (response.status === 200) {
        const user = await this.userService.checkNewUser(JSON.parse(result).id);
        return await this.createToken(user);
      } else {
        return 'kakao login open API error: ' + response.statusText;
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  async createToken(user: CheckNewUer): Promise<string> {
    return await this.jwtService.sign(
      { sub: user },
      { secret: process.env.SECRET_KEY, expiresIn: '1h' },
    );
  }
}
