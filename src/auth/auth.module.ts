import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import googleOauthConfig from './config/google-oauth.config';
import { AuthController } from './auth.controller';
import { AuthService } from './shared/auth.service';
import { UserService } from 'src/user/shared/user.service';
import { User } from 'src/user/schemas/user.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoogleStrategy } from './strategies/google.strategies';
// import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forFeature(googleOauthConfig),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy, UserService],
})
export class AuthModule {}
