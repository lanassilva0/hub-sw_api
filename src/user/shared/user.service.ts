import { Injectable } from '@nestjs/common';
import { User } from './user';

@Injectable()
export class UserService {
  findById(googleId: string) {
    // lógica para encontrar um usuário pelo googleId
    return googleId;
  }

  findByEmail(email: string) {
    // lógica para encontrar um usuário pelo email
  }

  create (userData: User) {
    // lógica para criar um novo usuário
  }

  findOrCreate(userData: User) {
    // lógica para encontrar ou criar um usuário
  }
}
