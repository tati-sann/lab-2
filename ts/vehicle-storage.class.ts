import { Transport as _TransportVehicle } from "./vehicle.interface";
import { Transport as _TransportVehicleStorage } from "./vehicle-storage.interface";


export namespace Transport {
    export class VehicleStorage<T extends _TransportVehicle.IVehicle> implements _TransportVehicleStorage.IVehicleStorage<T> {
        private _createdDate: Date;
        private _vehicles: Array<T>;

        constructor(createdDate: Date, vehicles: Array<T>) {
            this._createdDate = createdDate;
            this._vehicles = vehicles;
        }

        public get createdDate(): Date {
            return  this._createdDate;
        }
        public get vehicles(): Array<T> {
            return  this._vehicles;
        }

        public set createdDate(createdDate: Date) {
            this._createdDate = createdDate;
        }
        public set vehicles(vehicles: Array<T>) {
            this._vehicles = vehicles;
        }
        public getAllVehicles(): Array<T> {
            return this._vehicles;
        }
    }
}
