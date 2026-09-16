"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../controllers/auth"));
const auth_schemas_1 = __importDefault(require("../schemas/auth.schemas"));
const validateBody_1 = require("../middlewares/validateBody");
const route = express_1.default.Router();
const signupValidation = (0, validateBody_1.validateBody)(auth_schemas_1.default.SignupSchema);
route.post('/signup', signupValidation, auth_1.default.signup);
route.post('/signin', auth_1.default.signin);
exports.default = route;
