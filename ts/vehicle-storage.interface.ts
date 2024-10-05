import { Transport as _Transport } from "./vehicle.interface";

export namespace Transport {
    export interface IVehicleStorage<T extends _Transport.IVehicle> {
        createdDate: Date;
        vehicles: Array<T>;
        getAllVehicles(): Array<T>;
    }
}
