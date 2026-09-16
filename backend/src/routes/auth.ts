import express from 'express';
import cntr from '../controllers/auth';

import schemas from '../schemas/auth.schemas';
import { validateBody } from '../middlewares/validateBody';

const route = express.Router();

const signupValidation = validateBody(schemas.SignupSchema);

route.post('/signup', signupValidation, cntr.signup);
route.post('/signin', cntr.signin);

export default route;
