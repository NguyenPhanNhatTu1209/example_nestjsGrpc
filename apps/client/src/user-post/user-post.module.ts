import { Module } from '@nestjs/common';
import { UserPostService } from './user-post.service';
import { UserPostController } from './user-post.controller';
import { UserModule } from '../user/user.module';
import { PostModule } from '../post/post.module';
import { UserService } from '../user/user.service';
import { PostService } from '../post/post.service';

@Module({
  imports: [UserModule, PostModule],
  controllers: [UserPostController],
  providers: [UserPostService, UserService, PostService],
})
export class UserPostModule {}
