"use client";
import { useThemeStore } from "@/store";
import React from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
export default function ThemeButton() {
  const theme = useThemeStore();

  return (
    <Switch
      className="mr-0 ml-0 sm:ml-auto"
      defaultSelected={theme.mode === "light" ? true : false}
      onClick={(e) => {
        if (theme.mode === "dark") return theme.toggleMode("light");
        theme.toggleMode("dark");
      }}
      size="md"
      color="primary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
      classNames={{
        wrapper: "bg-primaryblue/10 m-0",
        thumb: "bg-white",
        startContent: "text-white",
        endContent: "text-primaryblue",
      }}
    ></Switch>
  );
}
