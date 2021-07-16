import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot(process.env.DB_URL)],
  controllers: [],
  providers: [],
})
export class PostModule {}
