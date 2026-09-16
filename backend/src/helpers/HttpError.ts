const error = {
  400: 'Bad request',
  404: 'Not found',
  401: 'Unauthorized',
};

export const HttpError = (status, message = error[status]) => {
  const error = new Error(message);
  error.status = status;
  return error;
};
