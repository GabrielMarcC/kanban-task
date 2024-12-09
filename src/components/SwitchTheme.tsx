"use client";

import { useTheme } from "next-themes";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { IconSun } from "./svgs";
import { IconMoon } from "./svgs";

export const SwitchTheme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex justify-center items-center p-4 gap-4">
      <IconSun />
      <Switch
        id="change-theme"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      />
      <Label htmlFor="change-theme" />
      <IconMoon />
    </div>
  );
};
