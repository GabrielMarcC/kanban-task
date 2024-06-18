import { CreateAccount } from "@/components/CreateAccount";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to Kanban",
};

export default function CreateAccountPage() {
  return (
    <div className="w-full h-screen bg-primary flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Create an account</h1>
      <CreateAccount />
    </div>
  );
}
