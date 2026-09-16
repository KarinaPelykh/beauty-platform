import * as z from 'zod';

const SignupSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

const SigninSchema = z.object({
  email: z.string(),
  password: z.string(),
});
export type SignupType = z.infer<typeof SignupSchema>;

export default { SignupSchema, SigninSchema };
