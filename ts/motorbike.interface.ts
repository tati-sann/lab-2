import { Transport as _Transport } from "./vehicle.interface";

export namespace Transport {
    export interface IMotorbike extends _Transport.IVehicle {
        frameType: string;
        isSport: boolean;
    }
}
