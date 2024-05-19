"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SwitchTheme } from "./SwitchTheme";
import { IconBoard, IconChevronUp } from "./svgs";
import { SubTitle } from "./ui/title";
import { useState } from "react";

export function DialogDemo() {
  const [selected, setSelected] = useState<boolean>(false);

  const toggle = () => {
    setSelected(!selected);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="border-none bg-inherit dark:bg-inherit p-0">
          <IconChevronUp />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[264px] h-[322px] rounded-lg top-[40%] p-0 gap-40 flex flex-col justify-center items-center">
        <div className="w-full flex flex-col items-start justify-center gap-5">
          <DialogHeader>
            <DialogTitle>
              <SubTitle className="uppercase text-[12px] tracking-[2.4px] leading-4 pl-20">
                all boards
              </SubTitle>
            </DialogTitle>
          </DialogHeader>
          {selected ? (
            <Button
              className=" flex h-12 items-center w-[90%] 
               rounded-r-3xl bg-main_purple gap-3 p-0 border-none"
              variant="default"
              onClick={toggle}
            >
              <IconBoard color="#FFFFFF" />
              <SubTitle className="text-white">platform launch</SubTitle>
            </Button>
          ) : (
            <Button
              className="flex h-12 items-center w-[90%] 
                rounded-r-3xl bg-white dark:bg-dark_gray gap-3 border-none "
              variant="default"
              onClick={toggle}
            >
              <IconBoard />
              <SubTitle>platform launch</SubTitle>
            </Button>
          )}
        </div>
        <DialogFooter className="w-[80%]">
          <SwitchTheme />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
