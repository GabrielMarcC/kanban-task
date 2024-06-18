import { BtnLogOut } from "@/components/BtnLogOut";
import { Header } from "@/components/Header";
import { TaskCard } from "@/components/TaskCard";

export default async function Home() {
  return (
    <main className="w-full h-screen flex flex-col  items-center ">
      <Header />
      <TaskCard />
      <BtnLogOut />
    </main>
  );
}
