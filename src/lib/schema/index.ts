import { z } from "zod";

export const UserSchema = z.object({
  email: z
    .string()
    .email({
      message: "Email must be a valid email address",
    })
    .min(10, {
      message: "Email must be at least 3 characters long",
    })
    .max(30, {
      message: "Email must be at most 30 characters long",
    }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long",
  }),
});
