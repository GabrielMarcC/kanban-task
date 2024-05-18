"use client";

import { useTheme } from "next-themes";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

export const SwitchTheme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Switch
        id="change-theme"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      />
      <Label htmlFor="change-theme" />
    </div>
  );
};
