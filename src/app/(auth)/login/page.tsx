import { LoginForm } from "@/components/LoginForm";

export default async function LoginPage() {
  return (
    <div className="w-full h-screen bg-primary flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold ">Welcome back!</h1>
      <LoginForm />
    </div>
  );
}
