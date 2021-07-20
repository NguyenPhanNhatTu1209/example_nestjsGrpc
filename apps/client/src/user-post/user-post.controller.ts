import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserPostService } from './user-post.service';
import { CreateUserPostDto } from './dto/create-user-post.dto';
import { UpdateUserPostDto } from './dto/update-user-post.dto';
import { UserService } from '../user/user.service';
import { PostService } from '../post/post.service';

@Controller('test')
export class UserPostController {
  constructor(
    private readonly userService: UserService,
    private readonly postService: PostService,
  ) {}

  @Get()
  async create(@Body() body) {
    var user = await this.userService.createUsers({
      name: 'a Nguyễn',
      email: 'a@gmail.com',
      phone: '0968356159',
      address: 'HCM',
    });
    var post = await this.postService.createPost({
      authorPost: 'Gomu Post',
      type: 'me',
      isDelete: false,
    });
    console.log('user: ' + user);
    console.log('post: ' + post);
    return 'abc';
  }
}
// v hết r á t qua lớp flutter đây  thanks an nhìu nhan
