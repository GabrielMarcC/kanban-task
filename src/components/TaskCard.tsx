import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { SubTitle, Title } from "./ui/title";

export const TaskCard = () => {
  return (
    <Card className="w-[280px] h-[88px] cursor-pointer border-none drop-shadow-lg">
      <CardContent className="p-4 flex flex-col gap-4">
        <CardHeader className=" p-0">
          <SubTitle className="flex text-[15px] text-black hover:text-primary">
            build ui for onboarding flow
          </SubTitle>
        </CardHeader>
        <SubTitle className="flex text-[12px]"> 0 of 3 subtasks</SubTitle>
      </CardContent>
    </Card>
  );
};
