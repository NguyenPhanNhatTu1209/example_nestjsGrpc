import { join } from 'path';
import { Transport, ClientOptions } from '@nestjs/microservices';

export const PostsServiceClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: `localhost:3100`,
    package: 'post',
    protoPath: join(__dirname, '../../../apps/share/_proto/post.proto'),
    loader: {
      enums: String,
      objects: true,
      arrays: true,
    },
  },
};
