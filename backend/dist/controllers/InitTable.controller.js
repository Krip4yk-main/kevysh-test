"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crud_controller_1 = require("./crud.controller");
const models_1 = require("../models");
class InitTableController extends crud_controller_1.CrudController {
    constructor() {
        super(models_1.InitTable);
        this.path = '/bank';
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(this.path, this.getAll);
        this.router.get(this.path + '/id', this.getOne); //for some reasons /:id do
        this.router.post(this.path + "/update", this.update);
        this.router.post(this.path, this.create);
        this.router.delete(this.path, this.delete);
    }
}
exports.default = InitTableController;
