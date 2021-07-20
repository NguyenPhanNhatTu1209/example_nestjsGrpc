import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { createPostDto, PostsService } from './post.interface';
import { PostsServiceClientOptions } from './posts-svc.options';

@Injectable()
export class PostService implements OnModuleInit {
  private postsService: PostsService;
  onModuleInit() {
    this.postsService =
      this.PostsServiceClientOptions.getService<PostsService>('PostsService');
  }
  @Client(PostsServiceClientOptions)
  private readonly PostsServiceClientOptions: ClientGrpc;
  async createPost(param: createPostDto) {
    const result = await this.postsService.createPost(param).toPromise();
    return result;
  }
}
