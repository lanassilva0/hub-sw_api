/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import googleOauthConfig from '../config/google-oauth.config';
import type { ConfigType } from '@nestjs/config';
import { AuthService } from '../auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(googleOauthConfig.KEY)
    private googleConfiguration: ConfigType<typeof googleOauthConfig>,
    private authService: AuthService,
  ) {
    if (
      !googleConfiguration.clientID ||
      !googleConfiguration.clientSecret ||
      !googleConfiguration.callbackURL
    ) {
      throw new Error(
        'Google OAuth configuration is missing required environment variables.',
      );
    }

    super({
      clientID: googleConfiguration?.clientID,
      clientSecret: googleConfiguration?.clientSecret,
      callbackURL: googleConfiguration?.callbackURL,
      scope: ['email', 'profile'],
      passReqToCallback: true,
    });
  }

  async validate(
    req: Request,
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ) {
    console.log({ profile });
    if (!profile) {
      throw new Error('No profile returned from Google');
    }

    const user = await this.authService.validateGoogleUser({
      googleId: profile?.id,
      email: profile?.email,
      name: profile?.name,
      avatar: profile?.picture,
      password: '',
      status: true,
      locale: profile?.locale,
      hashedRefreshToken: refreshToken,
    });
    done(null, user);
    return user;
  }
}
