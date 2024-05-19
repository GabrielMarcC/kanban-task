"use client";

import { DialogDemo } from "./Dialog";
import {
  IconChevronUp,
  IconLogo,
  IconPlus,
  IconVerticalEllipsis,
} from "./svgs/index";

import { Button } from "./ui/button";
import { Title } from "./ui/title";

export const Header = () => {
  return (
    <header className="w-[375px] h-[64px] flex items-center justify-between p-5 fixed z-[99999999] bg-white dark:bg-very_dark_gray">
      <div className=" flex justify-center items-center gap-4">
        <IconLogo />
        <Title>platform launch</Title>
        <DialogDemo />
      </div>
      <div className="flex items-center justify-center gap-4">
        <Button className="w-[48px] h-[32px] rounded-2xl outline-none">
          <IconPlus />
        </Button>
        <IconVerticalEllipsis />
      </div>
    </header>
  );
};
