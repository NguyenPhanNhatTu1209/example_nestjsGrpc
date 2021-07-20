import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Header,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { createUserDto } from './user.interface';
import { LoggerService } from 'apps/share/services/logger.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly _userService: UserService, // private readonly _logger: LoggerService,
  ) {}

  @Post('createUser')
  @Header('Content-Type', 'application/json')
  createPost(@Body() body: createUserDto) {
    // this._logger.log('data' + body.name);
    return this._userService.createUsers({
      name: body.name,
      phone: body.phone,
      email: body.email,
      address: body.address,
    });
  }
  @Get()
  getall() {
    return 'asasa';
  }
}
