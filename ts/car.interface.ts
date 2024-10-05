import { Transport as _Transport } from "./vehicle.interface";

export namespace Transport {
    export enum BodyType {
        Sedan = "Sedan",
        Coupe = "Coupe",
        SUV = "SUV",
        Hatchback = "Hatchback",
        Convertible = "Convertible",
    }

    export enum CarClass {
        A = "A",
        B = "B",
        C = "C",
        D = "D",
        E = "E",
        F = "F",
        M = "M",
        S = "S",
        J = "J",
    }

    export interface ICar extends _Transport.IVehicle {
        bodyType: BodyType;
        carClass: CarClass;
    }
}
