"use client";

import { DialogBoard } from "./DialogBoard";
import { IconChevronDown, IconLogo, IconVerticalEllipsis } from "./svgs/index";
import { Title } from "./ui/title";

export const Header = () => {
  return (
    <header
      className={`
      w-[375px] h-[64px] flex items-center justify-between p-5  top-0 bg-white dark:bg-very_dark_gray`}
    >
      <div className=" flex justify-center items-center gap-4">
        <IconLogo />
        <Title>platform launch</Title>
        <IconChevronDown />
      </div>
      <div className="flex items-center justify-center gap-4">
        <DialogBoard />
        <IconVerticalEllipsis />
      </div>
    </header>
  );
};
