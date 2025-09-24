import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Put,
  Post,
  Body,
} from '@nestjs/common';
import { UserService } from './user.service';
import type { UserModel } from './user.model';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<UserModel[]> {
    return this.userService.getAll();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<UserModel> {
    const user = await this.userService.findById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  @Put(':id')
  async updateUser(@Param('id') id: string): Promise<UserModel> {
    const user = await this.userService.disableUser(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  @Post()
  async createUser(@Body() userData: UserModel): Promise<UserModel> {
    return this.userService.create(userData);
  }
}
