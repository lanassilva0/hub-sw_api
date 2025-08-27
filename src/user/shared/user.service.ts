import { Injectable } from '@nestjs/common';
import { User } from './user';

@Injectable()
export class UserService {
  users: User[] = [
    {
      googleId: 101,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      avatar: 'https://avatars.googleusercontent.com/u/101',
      locale: 'en-US',
      createdAt: new Date(),
      updatedAt: new Date(),
      status: true,
    },
    {
      googleId: 102,
      name: 'Bruno Silva',
      email: 'bruno.silva@example.com',
      avatar: 'https://avatars.googleusercontent.com/u/102',
      locale: 'pt-BR',
      createdAt: new Date(),
      updatedAt: new Date(),
      status: true,
    },
    {
      googleId: 103,
      name: 'Carlos Rodriguez',
      email: 'carlos.rodriguez@example.com',
      avatar: 'https://avatars.googleusercontent.com/u/103',
      locale: 'es-ES',
      createdAt: new Date(),
      updatedAt: new Date(),
      status: false,
    },
    {
      googleId: 104,
      name: 'Diana Smith',
      email: 'diana.smith@example.com',
      avatar: 'https://avatars.googleusercontent.com/u/104',
      createdAt: new Date(),
      updatedAt: new Date(),
      status: true,
    },
    {
      googleId: 105,
      name: 'Elena Petrov',
      email: 'elena.petrov@example.com',
      avatar: 'https://avatars.googleusercontent.com/u/105',
      locale: 'ru-RU',
      createdAt: new Date(),
      updatedAt: new Date(),
      status: false,
    },
  ];

  findById(id: number) {
    const userFind = this.users.find((user) => user.googleId === id);

    return userFind;
  }

  findByEmail(email: string) {
    return this.users.find((user) => user.email === email);
  }

  create(userData: User) {
    console.log(userData);
  }

  findOrCreate(userData: User) {
    console.log(userData);
  }

  getAll() {
    return [];
  }

  disableUser(id: number) {
    return this.users[id];
  }
}
