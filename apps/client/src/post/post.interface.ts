import { Observable } from 'rxjs';

export interface id {
  id: string;
}
export interface Post {
  id: string;
  authorPost: string;
  type: string;
  isDelete: boolean;
}
export interface createPostDto {
  authorPost: string;
  type: string;
  isDelete: boolean;
}
export interface PostsService {
  createPost(body: createPostDto): Observable<Post>;
}
