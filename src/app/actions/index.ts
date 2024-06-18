"use server";

import { UserSchema } from "@/lib/schema";
import { z } from "zod";

type UserSchemaType = z.infer<typeof UserSchema>;

export async function create(user: UserSchemaType) {
  try {
    const req = await fetch("http://localhost:3000/api/create/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...user,
      }),
    });

    const res = await req.json();

    if (!res.ok) {
      throw new Error("Failed to create user");
    }

    return res;
  } catch (error: any) {
    console.log(error.message);
  }
}
