export namespace Transport {
    export enum DocType {
        PASSWORD = "Паспорт",
        FOREIGN_PASSPORT = "Паспорт иностранного гражданина",
        DRIVER_LICENSE = "Водительское удостоверение",
        OTHER = "Другой документ"

    }
    export interface IOwner {
        lastname: string;
        name: string;
        patronymic: string;
        birthDate: Date;
        docType: DocType;
        docSeries: string | number;
        docNumber: string | number;

        getOwner(): void;
    }
}
