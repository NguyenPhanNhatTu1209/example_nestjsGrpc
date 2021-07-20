import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  createPost,
  IService,
} from 'apps/post-app/interface/service.interface';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post, PostDocument } from './post.schema';

@Injectable()
export class PostService implements IService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}
  createPost(param: createPost): Promise<Post> {
    return this.postModel.create({
      authorPost: param.authorPost,
      type: param.type,
      isDelete: param.isDelete,
    });
  }
}
