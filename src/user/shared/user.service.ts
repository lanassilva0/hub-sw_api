import { Injectable } from '@nestjs/common';
import { User } from './user';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async findById(id: string) {
    return await this.userModel.findOne({ _id: id }).exec();
  }

  async getAll() {
    return await this.userModel.find().exec();
  }

  async findByEmail(email: string) {
    return await this.userModel.findOne({ email }).exec();
  }

  async findOrCreate(userData: User) {
    const user = await this.findByEmail(userData.email);
    if (user) {
      return user;
    }
    return await this.create(userData);
  }

  async create(userData: User) {
    const createdUser = new this.userModel(userData);
    return await createdUser.save();
  }

  async disableUser(id: string) {
    await this.userModel.findByIdAndUpdate(id, { isActive: false }).exec();
    return this.userModel.findById(id);
  }
}
