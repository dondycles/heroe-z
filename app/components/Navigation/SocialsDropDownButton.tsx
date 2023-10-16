"use client";
import { useNavigationStore, useThemeStore } from "@/store";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
import {
  BsHeart,
  BsRocket,
  BsCheckCircle,
  BsPeople,
  BsHeartFill,
  BsRocketFill,
  BsCheckCircleFill,
  BsPeopleFill,
} from "react-icons/bs";
import { TbPlayerTrackNextFilled, TbPlayerTrackNext } from "react-icons/tb";
import ThemeButton from "../Theme/ThemeButton";
export default function SocialsDownButton() {
  const navigation = useNavigationStore();
  const theme = useThemeStore();
  const pathname = usePathname();
  let options = [
    {
      title: "DISCORD",
      href: "/about",
      icon: <FaDiscord />,
      filledIcon: <BsHeartFill />,
    },
    {
      title: "X",
      href: "/studio-z",
      icon: <FaXTwitter />,
      filledIcon: <BsRocketFill />,
    },
  ];
  return (
    <Dropdown
      backdrop="opaque"
      className={`bg-transparent shadow-none p-0 m-0 text-primary ${theme.mode}`}
    >
      <DropdownTrigger>
        <Button className={`btn-default text-xs  bg-primary/10 text-primary`}>
          <span className=" sm:group-hover:translate-x-1 duration-150">
            SOCIALS
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
        className={`font-montserrat p-0 m-0 max-w-[175px] rounded-xl bg-background/90
        ${
          theme.mode === "dark"
            ? " shadow-[0_0_20px_#ff444466]"
            : " shadow-[0_0_20px_#0099ff66]"
        }
        
        `}
        aria-label="Dropdown menu"
      >
        {options.map((option) => {
          return (
            <DropdownItem
              key={option.title}
              textValue={option.title}
              onClick={() => navigation.setWillNavigateTo(option.href)}
              className={`rounded-none first:rounded-t-xl  p-3 group ${
                pathname === option.href
                  ? "bg-primary text-content1 pointer-events-none"
                  : "bg-transparent sm:hover:bg-primary/20"
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
      </DropdownMenu>
    </Dropdown>
  );
}