import {DayName} from "./utils.interface";

export default interface ScheduleModel {
    id?: number,

    trainId: number,
    from_city: string,
    to_city: string,
    day: DayName,
    time: string, // format 'hh:mm'

    createdAt?: any,
    updatedAta?: any
}
