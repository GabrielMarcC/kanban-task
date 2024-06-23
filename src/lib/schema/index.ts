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

export const CreateBoard = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.string().email({ message: "Invalid email" }),
});

export const CreateSubtask = z.object({
  description: z.string(),
});

export const CreateTask = z.object({
  boardId: z.string(),
  name: z.string(),
  description: z.string().optional(),
  status: z.enum(["TODO", "DOING", "DONE"]).optional(),
  subtask: CreateSubtask.array().optional(),
});
