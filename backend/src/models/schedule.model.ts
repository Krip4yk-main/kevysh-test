import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import ScheduleModel from "../interfaces/schedule.interface";
import Trains from "./trains.model";

@Table({tableName: "initTable", timestamps: true})
class Schedule extends Model<ScheduleModel> {
    @ForeignKey(() => Trains)
    @Column({type: DataType.NUMBER, allowNull: false})
    trainId: number

    @Column({type: DataType.STRING, allowNull: false})
    from: string

    @Column({type: DataType.STRING, allowNull: false})
    to: string

    @Column({type: DataType.STRING, allowNull: false})
    day: string

    @Column({type: DataType.STRING, allowNull: false})
    time: string
}

export default Schedule;
