import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;
  @Prop()
  phone: string;
  @Prop()
  email: string;
  @Prop({ default: 'USER' })
  role: string;
  @Prop()
  address: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
