import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  googleId: { type: String },
  avatar: { type: String },
  locale: { type: String },
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
  status: { type: Boolean, default: false },
  hashedRefreshToken: { type: String },
});

export interface UserModel extends mongoose.Document {
  id: string;
  name: string;
  email: string;
  password: string;
  googleId?: string;
  hashedRefreshToken?: string;
  avatar?: string;
  locale?: string;
  createdAt: Date;
  updatedAt: Date;
  status: boolean;
}
