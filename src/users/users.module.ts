import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserSchema } from './schemas/user.schema';
import { UniqueEmailValidator } from './validators/unique-email.validator';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [UsersService, UniqueEmailValidator],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}