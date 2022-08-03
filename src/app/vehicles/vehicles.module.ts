import { Module } from '@nestjs/common';
import { VehiclesGateway } from './vehicles.gateway';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from './commands';

@Module({
  imports: [CqrsModule],
  controllers: [],
  providers: [VehiclesGateway, ...CommandHandlers],
})
export class VehiclesModule {}
