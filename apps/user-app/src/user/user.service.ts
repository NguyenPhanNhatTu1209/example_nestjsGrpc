import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  createUser,
  IService,
} from 'apps/user-app/interface/service.interface';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService implements IService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  createUser(param: createUser): Promise<User> {
    return this.userModel.create({
      name: param.name,
      phone: param.phone,
      email: param.email,
      address: param.address,
    });
  }
}
