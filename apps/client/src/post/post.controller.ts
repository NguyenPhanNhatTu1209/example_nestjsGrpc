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
import { PostService } from './post.service';
import { UpdatePostDto } from './dto/update-post.dto';
import { createPostDto } from './post.interface';

@Controller('post')
export class PostController {
  constructor(private readonly _postService: PostService) {}

  @Post('createpost')
  @Header('Content-Type', 'application/json')
  createPost(@Body() body: createPostDto) {
    return this._postService.createPost({
      authorPost: body.authorPost,
      isDelete: body.isDelete,
      type: body.type,
    });
  }

  @Get()
  findAll() {
    return 'adhsadj';
  }

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
