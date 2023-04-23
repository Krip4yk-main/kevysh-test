import {CrudController} from "./crud.controller";
import {InitTable} from "../models";


class InitTableController extends CrudController {
    public path = '/bank';

    constructor() {
        super(InitTable);
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.path, this.getAll);
        this.router.get(this.path + '/id', this.getOne); //for some reasons /:id do
        this.router.post(this.path + "/update", this.update);
        this.router.post(this.path, this.create);
        this.router.delete(this.path, this.delete);
    }

    /*create = (request: express.Request, response: express.Response) => {
        let data: any
        try {
            data = JSON.parse(JSON.stringify(request.body)).data;
            if (!data || !data.name || !data.balance) {
                BAD_REQUEST(response, {message: "Missing arguments or bad JSON, read docs!"})
                return;
            }
        } catch (error) {
            console.error(error)
            BAD_REQUEST(response, {message: error})
            return;
        }
        Bank.create({
            name: data.name,
            balance: data.balance
        }).then(res => {
            OK(response, res)
        }).catch(error => {
            console.error(error)
            ERROR(response, {message: error})
        })
    }*/
}

export default InitTableController;