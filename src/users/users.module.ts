import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserSchema } from './schemas/user.schema';
import { UniqueEmailValidator } from './validators/unique-email.validator';
import { NotOwnUserGuard } from './guards/not-own-user.guard';
import { ExcludeOwnUserGuard } from './guards/exclude-own-user.guard';
import { ValidateObjectIdPipe } from "./pipes/validate-object-id.pipe";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [UsersService, UniqueEmailValidator, NotOwnUserGuard, ExcludeOwnUserGuard, ValidateObjectIdPipe],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
