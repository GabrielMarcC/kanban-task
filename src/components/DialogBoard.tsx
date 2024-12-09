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
import { IconBoard, IconChevronUp, IconPlus } from "./svgs";
import { SubTitle } from "./ui/title";
import { useState } from "react";
import { IconCBoard } from "./svgs/icon-cboard";

export function DialogBoard() {
  const [selected, setSelected] = useState<boolean>(false);

  const toggle = () => {
    setSelected(!selected);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-[48px] h-[32px] rounded-2xl outline-none">
          <IconPlus color="#FFFFFF" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[264px] min-h-[322px]   rounded-lg top-[40%] py-2 px-0 gap-5 flex flex-col  items-center">
        <DialogHeader>
          <DialogTitle>
            <SubTitle className="uppercase text-[12px] tracking-[2.4px] leading-4 p-4">
              all boards
            </SubTitle>
          </DialogTitle>
        </DialogHeader>
        <div className="w-full h-auto flex flex-col items-start justify-start gap-2">
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
              className="flex h-12 items-center w-[90%] p-0
                rounded-r-3xl bg-white dark:bg-dark_gray gap-3 border-none "
              variant="default"
              onClick={toggle}
            >
              <IconBoard />
              <SubTitle>platform launch</SubTitle>
            </Button>
          )}
          <Button className="bg-transparent text-primary ml-2 flex gap-1 w-[90%] h-12 items-center justify-center p-0">
            <IconBoard color="#635FC7" />
            <IconCBoard />
          </Button>
        </div>
        <DialogFooter className="w-[80%]">
          <SwitchTheme />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
