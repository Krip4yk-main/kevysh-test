"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleTable = exports.TrainsTable = void 0;
var trains_model_1 = require("./trains.model");
Object.defineProperty(exports, "TrainsTable", { enumerable: true, get: function () { return __importDefault(trains_model_1).default; } });
var schedule_model_1 = require("./schedule.model");
Object.defineProperty(exports, "ScheduleTable", { enumerable: true, get: function () { return __importDefault(schedule_model_1).default; } });
