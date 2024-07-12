import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { faker } from '@faker-js/faker';
import { User } from '../users/interfaces/user.interface';

@Injectable()
export class SeedService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async seed() {
    const users = [];
    for (let i = 0; i < 25; i++) {
      users.push({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await this.userModel.insertMany(users);
    return 'Seed data created successfully';
  }
}
