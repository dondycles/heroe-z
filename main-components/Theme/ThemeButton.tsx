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
    // <label className="swap swap-rotate text-3xl join-item group z-[51] bg-secondary/[20%] text-secondary rounded-full h-12 w-12  border-transparent sm:border-[1px] sm:hover:border-secondary duration-150 sm:active:scale-[95%] ">
    //   <input
    //     defaultChecked={theme.mode === "light" ? false : true}
    //     onClick={() => {
    //       if (theme.mode === "dark") return theme.toggleMode("light");
    //       theme.toggleMode("dark");
    //     }}
    //     type="checkbox"
    //   />
    //   <>
    //     <span className={` swap-off `}>
    //       <MdDarkMode />
    //     </span>
    //     <span className={` swap-on`}>
    //       <MdLightMode />
    //     </span>
    //   </>
    // </label>

    <Switch
      className="ml-auto mr-6 z-[51]"
      defaultSelected={theme.mode === "light" ? true : false}
      onClick={() => {
        if (theme.mode === "dark") return theme.toggleMode("light");
        theme.toggleMode("dark");
      }}
      size="sm"
      color="primary"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    ></Switch>
  );
}
