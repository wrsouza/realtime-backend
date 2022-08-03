interface Region {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export interface UpdateVehicleDto {
  id: string;
  region: Region;
  register: string;
}
