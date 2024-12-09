"use client";
/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import { UserSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn } from "next-auth/react";

export const LoginForm = () => {
  type UserSchemaType = z.infer<typeof UserSchema>;
  const form = useForm<UserSchemaType>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async () => {};

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-5/6 lg:w-[30%] h-60 flex flex-col justify-center gap-3"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel />
              <FormControl>
                <Input
                  required
                  type="email"
                  placeholder="email@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel />
              <FormControl>
                <Input
                  required
                  type="password"
                  placeholder="********"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex justify-end">
          <Link
            href={"/create"}
            className="text-sm hover:underline cursor-pointer"
          >
            Do you don't have an account?
          </Link>
        </div>
        <Button
          className="w-3/6"
          type="submit"
          variant="secondary"
          onClick={() =>
            signIn("credentials", {
              callbackUrl: "/",
              ...form.getValues(),
            })
          }
        >
          Login
        </Button>
      </form>
      <Button
        className="w-3/6"
        variant="secondary"
        onClick={() => signIn("google", { callbackUrl: "/" })}
      >
        Login with Google
      </Button>
    </Form>
  );
};
