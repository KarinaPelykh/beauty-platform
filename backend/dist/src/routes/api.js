"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("../controller/controller"));
const route = express_1.default.Router();
route.post('/signup', controller_1.default.signup);
route.post('/signin', controller_1.default.signin);
exports.default = route;
