import { Module } from '@nestjs/common';
import { VehiclesModule } from './app/vehicles/vehicles.module';
import { AppController } from './app.controller';

@Module({
  imports: [VehiclesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
