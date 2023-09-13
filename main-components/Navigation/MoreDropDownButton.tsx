"use client";
import { useNavigationStore, useThemeStore } from "@/store";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  NextUIProvider,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";

import {
  BsWallet,
  BsHouse,
  BsHeart,
  BsMap,
  BsBuildings,
  BsLightbulb,
  BsBook,
  BsRocket,
  BsCollection,
  BsCheckCircle,
  BsPeople,
  BsWalletFill,
  BsHouseFill,
  BsHeartFill,
  BsMapFill,
  BsBuildingsFill,
  BsLightbulbFill,
  BsBookFill,
  BsRocketFill,
  BsCollectionFill,
  BsCheckCircleFill,
  BsPeopleFill,
  BsQuestion,
  BsFillPeopleFill,
} from "react-icons/bs";
import { TbPlayerTrackNextFilled, TbPlayerTrackNext } from "react-icons/tb";
import ThemeButton from "../Theme/ThemeButton";
import { useState } from "react";
export default function MoreDropDownButton() {
  const navigation = useNavigationStore();
  const theme = useThemeStore();
  const pathname = usePathname();
  let options = [
    {
      title: "ABOUT",
      href: "/about",
      icon: <BsHeart />,
      filledIcon: <BsHeartFill />,
    },

    {
      title: "STUDIO Z",
      href: "/studio-z",
      icon: <BsRocket />,
      filledIcon: <BsRocketFill />,
    },
    {
      title: "UPDATES",
      href: "/updates",
      icon: <BsCheckCircle />,
      filledIcon: <BsCheckCircleFill />,
    },
    {
      title: "TEAM",
      href: "/team",
      icon: <BsPeople />,
      filledIcon: <BsPeopleFill />,
    },
  ];
  return (
    <Dropdown
      backdrop="opaque"
      className={`bg-transparent shadow-none p-0 m-0 text-primaryblue ${theme.mode}`}
    >
      <DropdownTrigger>
        <Button
          className={`btn-default text-xs  ${
            pathname === "/team" ||
            pathname === "/updates" ||
            pathname === "/studio-z" ||
            pathname === "/about"
              ? "bg-primaryblue text-content1"
              : "bg-primaryblue/10 text-primaryblue"
          }`}
        >
          <span className=" sm:group-hover:translate-x-1 duration-150">
            MORE
          </span>
          <span className=" sm:group-hover:text-lg duration-150 rotate-90">
            {pathname === "/team" ||
            pathname === "/updates" ||
            pathname === "/studio-z" ||
            pathname === "/about" ? (
              <TbPlayerTrackNextFilled />
            ) : (
              <TbPlayerTrackNext />
            )}
          </span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        color="primary"
        variant="flat"
        className=" font-montserrat p-0 m-0 max-w-[175px] rounded-xl bg-background/90"
        aria-label="Dropdown menu"
      >
        <DropdownSection items={options} showDivider className="p-0 m-0 over">
          {options.map((option) => {
            return (
              <DropdownItem
                onClick={() => navigation.setWillNavigateTo(option.href)}
                className={`border-[1px] rounded-none first:rounded-t-xl border-transparent hover:border-primaryblue  p-3 group ${
                  pathname === option.href
                    ? "bg-primaryblue text-content1 pointer-events-none"
                    : "bg-transparent hover:bg-transparent"
                }`}
              >
                <p className="flex justify-center items-center gap-2 text-xs min-h-[28px]">
                  <span className=" sm:group-hover:translate-x-1 duration-150">
                    {option.title}
                  </span>
                  <span className=" sm:group-hover:text-lg duration-150">
                    {pathname === option.href ? option.filledIcon : option.icon}
                  </span>
                </p>
              </DropdownItem>
            );
          })}
        </DropdownSection>
        <DropdownSection className="p-0 m-0">
          <DropdownItem
            isReadOnly
            className={`border-[1px] border-transparent hover:border-transparent  p-3 group hover:bg-transparent`}
          >
            <div className=" flex flex-row items-center justify-around">
              <span className="text-xs">DARK MODE</span>
              <span>
                <ThemeButton />
              </span>
            </div>
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
