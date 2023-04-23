import {Column, DataType, Model, Table} from "sequelize-typescript";
import TrainsModel from "../interfaces/trains.interface";

@Table({tableName: "initTable", timestamps: true})
class Trains extends Model<TrainsModel> {
    @Column({type: DataType.STRING, allowNull: false, defaultValue: 'Default Train'})
    name: string
}

export default Trains;
