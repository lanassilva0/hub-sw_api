import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  googleId: Number,
  name: String,
  email: String,
  avatar: String,
  locale: String,
  createdAt: Date,
  updatedAt: Date,
  status: Boolean,
});
