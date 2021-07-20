import { Controller } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { GrpcMethod } from '@nestjs/microservices';
import { createPost } from 'apps/post-app/interface/service.interface';
import { Post } from './post.schema';

@Controller()
export class PostController {
  constructor(private readonly _postService: PostService) {}

  @GrpcMethod('PostsService', 'createPost')
  async createPost(param: createPost): Promise<Post> {
    const result = await this._postService.createPost(param);
    console.log(result);
    return result;
  }
  // @Get()
  // findAll() {
  //   return this.postService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.postService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
  //   return this.postService.update(+id, updatePostDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.postService.remove(+id);
  // }
}
