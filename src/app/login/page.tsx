import { LoginForm } from "@/components/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to Kanban",
};

export default function LoginPage() {
  return (
    <div className="w-full h-screen bg-primary flex flex-col items-center justify-center">
      <h1>Welcome to kanban task</h1>
      <LoginForm />
    </div>
  );
}
