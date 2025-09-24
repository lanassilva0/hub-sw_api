import { Injectable } from '@nestjs/common';
import { UserModel } from '../user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<UserModel>) {}

  async findById(id: string) {
    return await this.userModel.findOne({ _id: id }).exec();
  }

  async getAll() {
    return await this.userModel.find().exec();
  }

  async findByEmail(email: string) {
    return await this.userModel.findOne({ email }).exec();
  }

  async findOrCreate(userData: UserModel) {
    const user = await this.findByEmail(userData.email);
    if (user) {
      return user;
    }
    return await this.create(userData);
  }

  async create(userData: UserModel) {
    const user = await this.findByEmail(userData.email);
    if (user) {
      return user;
    }
    const createdUser = new this.userModel({
      ...userData,
      createdAt: new Date(),
    });
    return await createdUser.save();
  }

  async disableUser(id: string) {
    await this.userModel
      .findByIdAndUpdate(id, { status: true, updatedAt: new Date() })
      .exec();
    return this.userModel.findById(id);
  }

  async updateHashedRefreshToken(userId: number, hashedRefreshToken: string) {
    return await this.userModel.updateOne(
      { id: userId },
      { hashedRefreshToken },
    );
  }
}
