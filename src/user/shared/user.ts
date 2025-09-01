import { Document } from 'mongoose';
import { Role } from 'src/auth/enums/role.enum';
export class CurrentUser extends Document {
  googleId: number;
  name: string;
  email: string;
  avatar: string;
  locale?: string;
  createdAt: Date;
  updatedAt: Date;
  status: boolean;
  password: string;
  hashedRefreshToken: string;
  role: Role;
}
