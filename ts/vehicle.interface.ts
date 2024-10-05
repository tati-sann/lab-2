import { Transport as _Transport } from "./owner.interface";

export namespace Transport {
    export interface IVehicle {
        brand: string;
        model: string;
        releaseYear: number;
        VIN: string;
        registrationNumber: string;
        owner: _Transport.IOwner;

        getVehicleWithoutOwner(): void;
    }
}
