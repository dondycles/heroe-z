"use client";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useThemeStore } from "@/store";
import React from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
export default function ThemeButton() {
  const theme = useThemeStore();

  return (
    <Switch
      className="ml-auto mr-6 z-[51]"
      defaultSelected={theme.mode === "light" ? true : false}
      onClick={() => {
        if (theme.mode === "dark") return theme.toggleMode("light");
        theme.toggleMode("dark");
      }}
      size="md"
      color="primary"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    ></Switch>
  );
}
