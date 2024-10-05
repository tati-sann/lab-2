import { Transport as _Transport } from "./owner.interface";

export namespace Transport {
    export class Owner implements _Transport.IOwner {
        private _lastname: string;
        private _name: string;
        private _patronymic: string;
        private _birthDate: Date;
        private _docType: _Transport.DocType;
        private _docSeries: string | number;
        private _docNumber: string | number;

        constructor(
            lastname: string,
            name: string,
            patronymic: string,
            birthDate: Date,
            docType: _Transport.DocType,
            docSeries: string | number,
            docNumber: string | number
        ) {
            this._lastname = lastname;
            this._name = name;
            this._patronymic = patronymic;
            this._birthDate = birthDate;
            this._docType = docType;
            this._docSeries = docSeries;
            this._docNumber = docNumber
        }

        public get lastname(): string {
            return  this._lastname;
        }
        public get name(): string {
            return  this._name;
        }
        public get patronymic(): string {
            return  this._patronymic;
        }
        public get birthDate(): Date {
            return  this._birthDate;
        }
        public get docType(): _Transport.DocType {
            return  this._docType;
        }
        public get docSeries(): string | number {
            return  this._docSeries;
        }
        public get docNumber(): string | number {
            return  this._docNumber;
        }

        public set lastname(lastname: string) {
            this._lastname = lastname;
        }
        public set name(name: string) {
            this._name = name;
        }
        public set patronymic(patronymic: string) {
            this._patronymic = patronymic;
        }
        public set birthDate(birthDate: Date) {
            this._birthDate = birthDate;
        }
        public set docType(docType: _Transport.DocType) {
            this._docType = docType;
        }
        public set docSeries(docSeries: string | number) {
            this._docSeries = docSeries;
        }

        public set docNumber(docNumber: string | number) {
            this._docNumber = docNumber;
        }

        public getOwner() {
            console.log(
                `ФИО: ${this._lastname} ${this._name} ${this._patronymic}; 
            Дата рождения: 
            ${this._birthDate.getDate()}.
            ${this._birthDate.getMonth() + 1}.
            ${this._birthDate.getFullYear()}; 
            Тип документа: ${this._docType}; 
            Серия документа: ${this._docSeries};
            Номер документа: ${this._docNumber};`
            )
        }
    }
}
