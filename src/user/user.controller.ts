/* eslint-disable @typescript-eslint/require-await */
import { Controller, Get, NotFoundException, Param, Put } from '@nestjs/common';
import { UserService } from './shared/user.service';
import { User } from './shared/user';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    const user = this.userService.findById(parseInt(id, 10));
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  @Put(':id')
  async updateUser(@Param('id') id: string): Promise<User> {
    return this.userService.disableUser(parseInt(id, 10));
  }
}
