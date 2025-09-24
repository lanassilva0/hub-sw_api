import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    UserModule,
    AuthModule,
    MongooseModule.forRoot(
      'mongodb+srv://lanassilvalss_db_user:tHEybDODT0MAZ9vn@testetec.j6hj3t6.mongodb.net/?retryWrites=true&w=majority&appName=testeTec',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
