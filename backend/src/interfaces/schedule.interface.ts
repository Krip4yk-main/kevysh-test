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

export interface ScheduleFound {
    trainName: string,
    from_city: string,
    to_city: string,
    day: string,
    time: string, // format 'hh:mm'
}
