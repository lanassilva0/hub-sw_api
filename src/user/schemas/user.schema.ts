// import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

// export const UserSchema = new mongoose.Schema(

export type UserDocument = HydratedDocument<User>;

@Schema({ collection: 'emioloTeste' })
export class User {
  @Prop()
  googleId: number;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  avatar: string;

  @Prop()
  locale: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  status: boolean;

  @Prop()
  password: string;

  @Prop()
  hashedRefreshToken: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
