import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from 'apps/share/configService.module';
import { ConfigService } from 'apps/share/services/config.service';
import { SharedModule } from 'apps/share/shared.module';
import { UserModule } from './user/user.module';
const MongooseConfig = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => ({
    uri: configService.get('DB_URL'),
    useUnifiedTopology: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true,
  }),
};
@Module({
  imports: [
    SharedModule,
    MongooseModule.forRootAsync(MongooseConfig),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class UserAppModule {}
