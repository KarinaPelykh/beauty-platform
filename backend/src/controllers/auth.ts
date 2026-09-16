import type { RequestHandler } from 'express';

const signup: RequestHandler = (req, res) => {
  const { name, email, password } = req.body;
  // made validation schema
  // CHECK IF USER EXIST IN DATA BASE IF YSE THROE error if no add to daatabes
  // hash password before adding to database
  console.log({ name, email, password });

  res.send('I got info');
};

const signin: RequestHandler = (req, res) => {
  console.log(req.body);
  res.send('I got info');
};

export default { signup, signin };
