import express, { type ErrorRequestHandler } from 'express';
import route from './src/routes/auth';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', route);

const errorHandler: ErrorRequestHandler = (_error, _req, res, _next) => {
  const { status = 500, message } = _error;
  res.status(status).json({ message });
};

app.use(errorHandler);
