import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { CarsModule } from './modules/cars/cars.module';
import { ImagesModule } from './modules/images/images.module';

@Module({
  imports: [UsersModule, AuthModule, CarsModule, ImagesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
