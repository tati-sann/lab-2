import { Transport as _TransportOwnerClass } from "./ts/owner.class";
import { Transport as _TransportOwnerInterface } from "./ts/owner.interface";
import { Transport as _TransportVehicleClass } from "./ts/vehicle.class";
import { Transport as _TransportCarClass } from "./ts/car.class";
import { Transport as _TransportCarInterface } from "./ts/car.interface";
import { Transport as _TransportMotorbikeClass } from "./ts/motorbike.class";
import { Transport as _TransportVehicleStorage } from "./ts/vehicle-storage.class";


const owner = new _TransportOwnerClass.Owner(
    "Иванов",
    "Иван",
    "Иванович",
    new Date(1990, 5, 11),
    _TransportOwnerInterface.DocType.PASSWORD,
    1234,
    567891
);

owner.getOwner();

const vehicle = new _TransportVehicleClass.Vehicle(
    "Toyota",
    "Camry",
    2020,
    "1HGCM82633A123456",
    "A123BC",
    owner
);

vehicle.getVehicleWithoutOwner();

const car = new _TransportCarClass.Car(
    "Toyota",
    "Camry",
    2020,
    "1HGCM82633A123456",
    "A123BC",
    owner,
    _TransportCarInterface.BodyType.Sedan,
    _TransportCarInterface.CarClass.B,
);

car.getVehicleWithoutOwner();

const car2 = new _TransportCarClass.Car(
    "Honda",
    "Accord",
    2021,
    "2HGCM82633A654321",
    "B456DF",
    owner,
    _TransportCarInterface.BodyType.Sedan,
    _TransportCarInterface.CarClass.C,
);

car2.getVehicleWithoutOwner();

const motorbike = new _TransportMotorbikeClass.Motorbike(
    "Yamaha",
    "MT-07",
    2021,
    "JYARN51E9A0000001",
    "B123BC",
    owner,
    "Двойная рама",
    true,
);

motorbike.getVehicleWithoutOwner();

const vehicleStorage = new _TransportVehicleStorage.VehicleStorage<_TransportCarInterface.ICar>(
    new Date(4, 5, 2023),
    [car, car2]
);

vehicleStorage.getAllVehicles();
