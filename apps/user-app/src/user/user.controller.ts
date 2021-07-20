import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GrpcMethod } from '@nestjs/microservices';
import { createUser } from 'apps/user-app/interface/service.interface';
import { User } from './user.schema';

@Controller()
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @GrpcMethod('UsersService', 'createUser')
  async createPost(param: createUser): Promise<User> {
    const result = await this._userService.createUser(param);
    console.log('user-app ' + result);
    return result;
  }
}
