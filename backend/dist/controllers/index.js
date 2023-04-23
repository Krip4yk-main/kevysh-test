"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleController = exports.TrainsController = void 0;
var trainsTable_controller_1 = require("./trainsTable.controller");
Object.defineProperty(exports, "TrainsController", { enumerable: true, get: function () { return __importDefault(trainsTable_controller_1).default; } });
var scheduleTable_controller_1 = require("./scheduleTable.controller");
Object.defineProperty(exports, "ScheduleController", { enumerable: true, get: function () { return __importDefault(scheduleTable_controller_1).default; } });
