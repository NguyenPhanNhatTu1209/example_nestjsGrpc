import { join } from 'path';
import { Transport, ClientOptions } from '@nestjs/microservices';

export const UsersServiceClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: `localhost:3200`,
    package: 'user',
    protoPath: join(__dirname, '../../../apps/share/_proto/user.proto'),
    loader: {
      enums: String,
      objects: true,
      arrays: true,
    },
  },
};
