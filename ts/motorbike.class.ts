import { Transport as _TransportOwner } from "./owner.interface";
import { Transport as _TransportMotorbike } from "./motorbike.interface";

export namespace Transport {
    export class Motorbike implements _TransportMotorbike.IMotorbike {
        private _brand: string;
        private _model: string;
        private _releaseYear: number;
        private _VIN: string;
        private _registrationNumber: string;
        private _owner: _TransportOwner.IOwner;
        private _frameType: string;
        private _isSport: boolean;

        constructor(
            brand: string,
            model: string,
            releaseYear: number,
            VIN: string,
            registrationNumber: string,
            owner: _TransportOwner.IOwner,
            frameType: string,
            isSport: boolean
        ) {
            this._brand = brand;
            this._model = model;
            this._releaseYear = releaseYear;
            this._VIN = VIN;
            this._registrationNumber = registrationNumber;
            this._owner = owner;
            this._frameType = frameType;
            this._isSport = isSport;
        }

        public get brand(): string {
            return  this._brand;
        }
        public get model(): string {
            return  this._model;
        }
        public get releaseYear(): number {
            return  this._releaseYear;
        }
        public get VIN(): string {
            return  this._VIN;
        }
        public get registrationNumber(): string {
            return  this._registrationNumber;
        }
        public get owner(): _TransportOwner.IOwner {
            return  this._owner;
        }
        public get frameType(): string {
            return  this._frameType;
        }
        public get isSport(): boolean {
            return  this._isSport;
        }
        public set brand(brand: string) {
            this._brand = brand;
        }
        public set model(model: string) {
            this._model = model;
        }
        public set releaseYear(releaseYear: number) {
            this._releaseYear = releaseYear;
        }
        public set VIN(VIN: string) {
            this._VIN = VIN;
        }
        public set registrationNumber(registrationNumber: string) {
            this._registrationNumber = registrationNumber;
        }
        public set owner(owner: _TransportOwner.IOwner) {
            this._owner = owner;
        }
        public set frameType(frameType: string) {
            this._frameType = frameType;
        }
        public set isSport(isSport: boolean) {
            this._isSport = isSport;
        }
        public getVehicleWithoutOwner(): void {
            console.log(`Марка: ${this._brand}; Модель: ${this._model}; 
        Год выпуска: ${this._releaseYear}; VIN: ${this._VIN}; 
        Регистрационный номер: ${this._registrationNumber}; 
        Тип рамы: ${this._frameType}; Для спорта: ${this._isSport}`);
        }
    }
}
