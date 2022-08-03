import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WsResponse,
} from '@nestjs/websockets';
import { CommandBus } from '@nestjs/cqrs';
import { DestinationDto, SubscribeResultDto, UpdateVehicleDto } from './dtos';
import { UpdateVehicleCommand } from './commands';
import { Observable } from 'rxjs';

@WebSocketGateway()
export class VehiclesGateway {
  constructor(private readonly commandBus: CommandBus) {}

  @SubscribeMessage('events')
  async handleMessage(
    @MessageBody() updateVehicleDto: UpdateVehicleDto,
  ): Promise<WsResponse<SubscribeResultDto>> {
    const command = new UpdateVehicleCommand(updateVehicleDto);
    return await this.commandBus.execute(command);
  }
}
