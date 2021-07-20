import { Post } from '../src/post/post.schema';

export interface queryfindByID {
  id: string;
}
export interface createPost {
  authorPost: string;
  type: string;
  isDelete: Boolean;
  // createdAt: Date;
}

export interface IService {
  createPost(param: createPost): Promise<Post>;
}
