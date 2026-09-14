import express from 'express';
import cntr from '../controller/controller';

const route = express.Router();

route.get('/health', cntr.getHealthyAdvices);

export default route;
