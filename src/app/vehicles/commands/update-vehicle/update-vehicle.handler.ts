import { Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { WsResponse } from '@nestjs/websockets';
import { from, map, Observable } from 'rxjs';
import { DestinationDto, SubscribeResultDto } from '../../dtos';
import { UpdateVehicleCommand } from './update-vehicle.command';

@CommandHandler(UpdateVehicleCommand)
export class UpdateVehicleHandler
  implements ICommandHandler<UpdateVehicleCommand>
{
  async execute({
    updateVehicleDto,
  }: UpdateVehicleCommand): Promise<SubscribeResultDto> {
    Logger.log(`Recebido: ${JSON.stringify(updateVehicleDto)}`);
    const destinations: DestinationDto[] = [
      {
        latitude: -21.1482538,
        longitude: -48.9738419,
      },
      {
        latitude: -21.1382472,
        longitude: -48.9743569,
      },
    ];
    return {
      event: 'events',
      data: JSON.stringify(destinations),
    };
  }
}
