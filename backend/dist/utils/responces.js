"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BAD_REQUEST = exports.ERROR = exports.OK = void 0;
const OK = (response, data, status = "OK") => {
    response.statusCode = 200;
    response.send({ status: status, data: data });
};
exports.OK = OK;
const ERROR = (response, data, status = "ERROR") => {
    response.statusCode = 200;
    response.send({ status: status, data: data });
};
exports.ERROR = ERROR;
const BAD_REQUEST = (response, data, status = "BAD_REQUEST") => {
    response.statusCode = 400;
    response.send({ status: status, data: data });
};
exports.BAD_REQUEST = BAD_REQUEST;
