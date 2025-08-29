import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import googleOauthConfig from './config/google-oauth.config';
import { AuthController } from './auth.controller';
import { AuthService } from './shared/auth.service';

@Module({
  imports: [ConfigModule.forFeature(googleOauthConfig)],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
