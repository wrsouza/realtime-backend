import { UpdateVehicleDto } from '../../dtos';

export class UpdateVehicleCommand {
  constructor(public readonly updateVehicleDto: UpdateVehicleDto) {}
}
