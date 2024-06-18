import { z } from "zod";

export const UserSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Name must be at least 3 characters long",
    })
    .optional(),
  email: z
    .string()
    .email({
      message: "Email must be a valid email address",
    })
    .max(30, {
      message: "Email must be at most 30 characters long",
    }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long",
  }),
});
