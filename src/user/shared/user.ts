import { Document } from 'mongoose';
export class User extends Document {
  googleId: number;
  name: string;
  email: string;
  avatar: string;
  locale?: string;
  createdAt: Date;
  updatedAt: Date;
  status: boolean;
}
