"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudController = void 0;
const express = __importStar(require("express"));
const responces_1 = require("../utils/responces");
class CrudController {
    constructor(db_model) {
        this.router = express.Router();
        this.getAll = (request, response) => {
            this.db_model.findAll().then((res) => {
                (0, responces_1.OK)(response, res);
            }).catch((error) => {
                console.error(error);
                (0, responces_1.ERROR)(response, { message: error });
            });
        };
        this.getOne = (request, response) => {
            let data;
            try {
                data = JSON.parse(JSON.stringify(request.query));
                if (!data || !data.id) {
                    (0, responces_1.BAD_REQUEST)(response, { message: "Missing arguments or bad JSON, read docs!" });
                    return;
                }
            }
            catch (error) {
                console.error(error);
                (0, responces_1.BAD_REQUEST)(response, { message: error });
                return;
            }
            this.db_model.findOne({
                where: {
                    id: data.id
                }
            }).then((res) => {
                (0, responces_1.OK)(response, res);
            }).catch((error) => {
                console.error(error);
                (0, responces_1.ERROR)(response, { message: error });
            });
        };
        this.create = (request, response) => {
            let data;
            try {
                data = JSON.parse(JSON.stringify(request.body)).data;
                if (!data || !data.name) {
                    (0, responces_1.BAD_REQUEST)(response, { message: "Missing arguments or bad JSON, read docs!" });
                    return;
                }
            }
            catch (error) {
                console.error(error);
                (0, responces_1.BAD_REQUEST)(response, { message: error });
                return;
            }
            this.db_model.create({
                name: data.name
            }).then((res) => {
                (0, responces_1.OK)(response, res);
            }).catch((error) => {
                console.error(error);
                (0, responces_1.ERROR)(response, { message: error });
            });
        };
        this.update = (request, response) => {
            let data;
            try {
                data = JSON.parse(JSON.stringify(request.body)).data;
                if (!data || !data.id || !data.name) {
                    (0, responces_1.BAD_REQUEST)(response, { message: "Missing arguments or bad JSON, read docs!" });
                    return;
                }
            }
            catch (error) {
                console.error(error);
                (0, responces_1.BAD_REQUEST)(response, { message: error });
                return;
            }
            this.db_model.update({
                name: data.name
            }, {
                where: {
                    id: data.id
                }
            }).then((res) => {
                (0, responces_1.OK)(response, { affected: res });
            }).catch((error) => {
                console.error(error);
                (0, responces_1.ERROR)(response, { message: error });
            });
        };
        this.delete = (request, response) => {
            let data;
            try {
                data = JSON.parse(JSON.stringify(request.body)).data;
                if (!data || !data.id) {
                    (0, responces_1.BAD_REQUEST)(response, { message: "Missing arguments or bad JSON, read docs!" });
                    return;
                }
            }
            catch (error) {
                console.error(error);
                (0, responces_1.BAD_REQUEST)(response, { message: error });
                return;
            }
            this.db_model.destroy({
                where: {
                    id: data.id
                }
            }).then((res) => {
                (0, responces_1.OK)(response, { affected: res });
            }).catch((error) => {
                console.error(error);
                (0, responces_1.ERROR)(response, { message: error });
            });
        };
        this.db_model = db_model;
    }
}
exports.CrudController = CrudController;
