import express, { type ErrorRequestHandler } from 'express';
import route from './src/routes/api';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', route);

const errorHandler: ErrorRequestHandler = (_error, _req, res, _next) => {
  res.status(500).send('Something broke!');
};

app.use(errorHandler);
