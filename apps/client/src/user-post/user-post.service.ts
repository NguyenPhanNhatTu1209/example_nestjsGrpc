import { Injectable } from '@nestjs/common';
import { CreateUserPostDto } from './dto/create-user-post.dto';
import { UpdateUserPostDto } from './dto/update-user-post.dto';

@Injectable()
export class UserPostService {
  create(createUserPostDto: CreateUserPostDto) {
    return 'This action adds a new userPost';
  }

  findAll() {
    return `This action returns all userPost`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userPost`;
  }

  update(id: number, updateUserPostDto: UpdateUserPostDto) {
    return `This action updates a #${id} userPost`;
  }

  remove(id: number) {
    return `This action removes a #${id} userPost`;
  }
}
