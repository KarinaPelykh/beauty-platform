import express from "express";
import cntr from "../controller/controller.mjs";
const route = express.Router();

route.get("health", cntr.getHealthyAdvices);

export default route;
