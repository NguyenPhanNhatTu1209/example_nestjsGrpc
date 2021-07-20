import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { createUserDto, UsersService } from './user.interface';
import { UsersServiceClientOptions } from './users-svc.options';

@Injectable()
export class UserService implements OnModuleInit {
  private usersService: UsersService;
  onModuleInit() {
    this.usersService =
      this.UsersServiceClientOptions.getService<UsersService>('UsersService');
  }
  @Client(UsersServiceClientOptions)
  private readonly UsersServiceClientOptions: ClientGrpc;
  async createUsers(param: createUserDto) {
    const result = await this.usersService.createUser(param).toPromise();
    return result;
  }
}
