import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post {
  @Prop()
  authorPost: string;
  @Prop()
  type: string;
  @Prop()
  isDelete: Boolean;
}

export const PostSchema = SchemaFactory.createForClass(Post);
