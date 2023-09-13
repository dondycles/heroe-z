"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import Curtain from "./Curtain";
import logo256dark from "@/public/logo256-dark.png";
import logo256 from "@/public/logo256.png";
import Image from "next/image";
import {
  useThemeStore,
  useAnimateStore,
  useNavigationStore,
  useRandomCurtainColor,
} from "@/store";
import { Button, ButtonGroup } from "@nextui-org/react";

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
} from "react-icons/bs";
import { IconType } from "react-icons";
import MoreDropDownButton from "./MoreDropDownButton";
import ThemeButton from "../Theme/ThemeButton";
export default function TopNav() {
  const pathname = usePathname();
  const searchparams = useSearchParams();
  const route = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isNavigated, setIsNavigated] = useState(false);
  const theme = useThemeStore();
  const animate = useAnimateStore();
  const navigation = useNavigationStore();
  const randomcurtain = useRandomCurtainColor();

  type GroupButtonTypes = {
    type: "button" | "dropdown";
    title: string;
    href: string;
    icon: IconType;
    filledIcon: IconType;
    children: null | ChildNode;
  };
  let groupButtons = [
    {
      type: "button",
      title: "MAP",
      href: "/road-map",
      icon: <BsMap />,
      filledIcon: <BsMapFill />,
      children: null,
    },
    {
      type: "button",
      title: "UNIVERSITY",
      href: "/heroez-university",
      icon: <BsBuildings />,
      filledIcon: <BsBuildingsFill />,
      children: null,
    },
    {
      type: "button",
      title: "SYSTEM",
      href: "/quest-system",
      icon: <BsLightbulb />,
      filledIcon: <BsLightbulbFill />,
      children: null,
    },
    {
      type: "button",
      title: "NOVEL",
      href: "/web-novel",
      icon: <BsBook />,
      filledIcon: <BsBookFill />,
      children: null,
    },

    {
      type: "button",
      title: "GALLERY",
      href: "/gallery",
      icon: <BsCollection />,
      filledIcon: <BsCollectionFill />,
      children: null,
    },
    {
      type: "dropdown",
      title: "MORE",
    },
    {
      type: "button",
      title: "CONNECT",
      href: "/connectwallet",
      icon: <BsWallet />,
      filledIcon: <BsWalletFill />,
      children: null,
    },
  ];

  useEffect(() => {
    if (!isMounted) return; //? This is to make that this useEffect is only running after the first time TopNav has been mounted.
    if (searchparams.get("chapter")) {
      if (
        String(pathname + "?chapter=" + searchparams.get("chapter")) ===
        navigation.willNavigateTo
      ) {
        setIsNavigated(true);
      } else {
        setIsNavigated(false);
      }
    } else {
      if (pathname === navigation.willNavigateTo) {
        setIsNavigated(true);
      } else {
        setIsNavigated(false);
      }
    }
  }, [pathname, navigation.willNavigateTo]);

  useEffect(() => {
    if (!isMounted) return; //? This is to make that this useEffect is only running after the first time TopNav has been mounted.
    if (searchparams.get("chapter")) {
      if (
        String(pathname + "?chapter=" + searchparams.get("chapter")) !=
        navigation.willNavigateTo
      )
        navigation.setWillNavigateTo(
          pathname + "?chapter=" + searchparams.get("chapter")
        );
    } else {
      if (pathname != navigation.willNavigateTo)
        navigation.setWillNavigateTo(pathname);
    }
  }, [pathname]);

  useEffect(() => {
    randomcurtain.setRandomIndex(Math.random() < 0.5 ? 1 : 2);
  }, [navigation.willNavigateTo]);

  useEffect(() => {
    if (searchparams.get("chapter")) {
      navigation.setWillNavigateTo(
        String(pathname + "?chapter=" + searchparams.get("chapter")) as string
      );
    } else {
      navigation.setWillNavigateTo(pathname as string);
    }
    animate.toggleMode(false);

    // ? This timeout is to handle the first time the TopNav has been mounted
    setTimeout(() => {
      setIsNavigated(true);
      setIsMounted(true);
    }, 2000);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full px-6 md:px-12 lg:px-24 xl:px-36 2xl:px-48 flex justify-between items-center max-h-24 h-full z-[100] backdrop-blur-sm duration-500 ${
        showMenu && "pr-6 md:pr-6 lg:pr-6 xl:pr-6 2xl:pr-6"
      }`}
    >
      <div
        onClick={() => {
          navigation.setWillNavigateTo("/");
        }}
        className="cursor-pointer"
      >
        <Image
          className=" aspect-square max-h-[64px] max-w-[64px]"
          src={theme.mode === "light" ? logo256 : logo256dark}
          alt="HeroeZ"
          quality={100}
          priority
        />
      </div>

      <ButtonGroup className=" hidden lg:flex ">
        {groupButtons.map((option, i) => {
          return (
            <React.Fragment key={i}>
              {option.type === "button" ? (
                <Button
                  className={`group btn-default text-xs  text-primaryblue bg-primaryblue/10`}
                >
                  <span className=" sm:group-hover:translate-x-1 duration-150">
                    {option.title}
                  </span>
                  <span className=" sm:group-hover:text-lg duration-150">
                    {option.icon}
                  </span>
                </Button>
              ) : (
                <MoreDropDownButton />
              )}
            </React.Fragment>
          );
        })}
      </ButtonGroup>

      <MenuButton
        menuStatus={showMenu}
        toggleMenu={() => setShowMenu((prev) => !prev)}
      />
      <Curtain
        navigate={() => {
          route.push(navigation.willNavigateTo);
        }}
        isNavigating={!isNavigated}
      />
      <Menu menuState={showMenu} closeMenu={() => setShowMenu(false)} />
    </motion.nav>
  );
}
