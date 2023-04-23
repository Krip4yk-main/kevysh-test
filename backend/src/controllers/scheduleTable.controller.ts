import {CrudController} from "./crud.controller";
import {ScheduleTable, TrainsTable} from "../models";
import * as express from "express";
import {BAD_REQUEST, ERROR, OK} from "../utils/responces";
import {Op} from "sequelize";
import ScheduleModel, {ScheduleFound} from "../interfaces/schedule.interface";


class TrainsTableController extends CrudController {
    public path = '/schedule';

    constructor() {
        super(ScheduleTable);
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.path, this.getAll);
        this.router.get(this.path + '/id', this.getOne); //for some reasons /:id do
        this.router.post(this.path + "/update", this.update);
        this.router.post(this.path + "/find", this.find);
        this.router.post(this.path, this.create);
        this.router.delete(this.path, this.delete);
    }



    create = (request: express.Request, response: express.Response) => {
        let data: any
        try {
            data = JSON.parse(JSON.stringify(request.body)).data;
            if (!data || (!data.trainId || !data.from_city || !data.to_city || !data.day || !data.time)) {
                BAD_REQUEST(response, {message: "Missing arguments or bad JSON, read docs!"})
                return;
            }
        } catch (error) {
            console.error(error)
            BAD_REQUEST(response, {message: error})
            return;
        }
        ScheduleTable.create({
            trainId: data.trainId,
            from_city: data.from_city,
            to_city: data.to_city,
            day: data.day,
            time: data.time,
        }).then((res: any) => {
            OK(response, res)
        }).catch((error: any) => {
            console.error(error)
            ERROR(response, {message: error})
        })
    }

    update = (request: express.Request, response: express.Response) => {
        let data: any
        try {
            data = JSON.parse(JSON.stringify(request.body)).data;
            if (!data || !data.id || (!data.trainId && !data.from_city && !data.to_city && !data.day && !data.time)) {
                BAD_REQUEST(response, {message: "Missing arguments or bad JSON, read docs!"})
                return;
            }
        } catch (error) {
            console.error(error)
            BAD_REQUEST(response, {message: error})
            return;
        }
        ScheduleTable.update({
            trainId: data.trainId,
            from_city: data.from_city,
            to_city: data.to_city,
            day: data.day,
            time: data.time,
        }, {
            where: {
                id: data.id
            }
        }).then((res: any) => {
            OK(response, {affected: res})
        }).catch((error: any) => {
            console.error(error)
            ERROR(response, {message: error})
        })
    }

    find = async (request: express.Request, response: express.Response) => {
        let data: any
        try {
            data = JSON.parse(JSON.stringify(request.body)).data;
            if (!data || (!data.from_city && !data.to_city)) {
                BAD_REQUEST(response, {message: "Missing arguments or bad JSON, read docs!"})
                return;
            }
        } catch (error) {
            console.error(error)
            BAD_REQUEST(response, {message: error})
            return;
        }
        try {
            const schedule = await ScheduleTable.findAll({
                where: {
                    from_city: {
                        [Op.like]: `%${data.from_city}%`
                    },
                    to_city: {
                        [Op.like]: `%${data.to_city}%`
                    }
                }
            });
            const scheduleDTO: ScheduleFound[] = [];
            for (const value of schedule) {
                const train = await TrainsTable.findOne({
                    where: {
                        id: value.trainId
                    }
                });
                if (!train) throw new Error("no train");
                scheduleDTO.push({
                    trainName: train.name,
                    from_city: value.from_city,
                    to_city: value.to_city,
                    day: value.day,
                    time: value.time
                })
            }
            OK(response, {res: scheduleDTO})
        } catch (error: any) {
            console.error(error)
            ERROR(response, {message: error})
        }
    }
}

export default TrainsTableController;
