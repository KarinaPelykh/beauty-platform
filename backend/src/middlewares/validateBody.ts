import type { RequestHandler } from 'express';
import * as z from 'zod';
import { HttpError } from '../helpers/HttpError';

export const validateBody = (schema: z.ZodType) => {
  const func: RequestHandler = (req, res, next) => {
lo
    const result = schema.safeParse(req.body);

    if (!result.success) {
    return  next(HttpError(400));
    }
    next();
  };
  return func;
};
