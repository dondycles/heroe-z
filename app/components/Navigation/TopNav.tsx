"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import Curtain from "./Curtain";
import logo256dark from "@/public/images/icons/logo256-dark.png";
import logo256 from "@/public/images/icons/logo256.png";
import Image from "next/image";
import {
  useThemeStore,
  useAnimateStore,
  useNavigationStore,
  useRandomCurtainColor,
} from "@/store";
import { Button, ButtonGroup, Divider, Tooltip } from "@nextui-org/react";
import {
  BsWallet,
  BsMap,
  BsBuildings,
  BsLightbulb,
  BsBook,
  BsCollection,
  BsWalletFill,
  BsMapFill,
  BsBuildingsFill,
  BsLightbulbFill,
  BsBookFill,
  BsCollectionFill,
} from "react-icons/bs";
import MoreDropDownButton from "./MoreDropDownButton";
import GlowingBorder from "../Styles/GlowingBorder";
import { SiFandom } from "react-icons/si";
import SocialsDownButton from "./SocialsDropDownButton";
import Link from "next/link";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
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
      type: "dropdown",
      title: "SOCIALS",
    },
    {
      type: "button",
      title: "CONNECT",
      href: null,
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
      className={`fixed top-0 left-0 w-full px-3 md:px-12 lg:px-24 xl:px-36 2xl:px-48 flex justify-between items-center max-h-24 h-full z-[100]  duration-500  bg-gradient-to-t from-transparent to-background/95 ${
        showMenu && "pr-3 md:pr-3 lg:pr-6 xl:pr-6 2xl:pr-6"
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

      <ButtonGroup
        className={`relative hidden lg:flex backdrop-blur-lg rounded-xl overflow-hidden glowing-border
        ml-4
        ${theme.mode === "dark" && pathname === "/" && "backdrop-brightness-50"}
        ${
          theme.mode === "dark"
            ? " shadow-[0_0_20px_#ff444466]"
            : " shadow-[0_0_20px_#0099ff66]"
        }
        `}
      >
        <GlowingBorder />

        {groupButtons.map((option, i) => {
          return (
            <React.Fragment key={option.title}>
              {option.type === "button" ? (
                <Button
                  onClick={() => navigation.setWillNavigateTo(option.href!)}
                  className={`group btn-default text-xs 
                  ${
                    option.href === null &&
                    "pointer-events-none cursor-not-allowed"
                  }
                  ${
                    pathname === option.href
                      ? "bg-primary text-content1 sm:hover:text-primary"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <span className=" sm:group-hover:translate-x-1 duration-150">
                    {option.title}
                  </span>
                  <span className=" sm:group-hover:text-lg duration-150">
                    {pathname === option.href ? option.filledIcon : option.icon}
                  </span>
                </Button>
              ) : (
                option.title === "MORE" && <MoreDropDownButton />
              )}
            </React.Fragment>
          );
        })}
        <Tooltip
          delay={0}
          closeDelay={0}
          className={` ${theme.mode} text-white`}
          color="primary"
          classNames={{ arrow: `${theme.mode} bg-primary ` }}
          showArrow={true}
          content="HEROEZ! Wiki"
        >
          <Button
            isIconOnly
            as={Link}
            href="https://heroez.fandom.com/wiki/HEROEZ_Wiki"
            target="_blank"
            className="btn-default bg-primary/10 text-primary text-lg"
          >
            <SiFandom />
          </Button>
        </Tooltip>
        <Tooltip
          delay={0}
          closeDelay={0}
          className={` ${theme.mode} text-white`}
          color="primary"
          classNames={{ arrow: `${theme.mode} bg-primary ` }}
          showArrow={true}
          content="Join the HEROEZ! Discord Server!"
        >
          <Button
            isIconOnly
            as={Link}
            href="https://discord.gg/FJ9MQW25B9"
            target="_blank"
            className="btn-default bg-primary/10 text-primary text-lg"
          >
            <FaDiscord />
          </Button>
        </Tooltip>
        <Tooltip
          delay={0}
          closeDelay={0}
          className={` ${theme.mode} text-white`}
          color="primary"
          showArrow={true}
          classNames={{ arrow: `${theme.mode} bg-primary ` }}
          content="/HEROEZofficial"
        >
          <Button
            isIconOnly
            as={Link}
            href="https://twitter.com/HEROEZofficial"
            target="_blank"
            className="btn-default bg-primary/10 text-primary text-lg"
          >
            <FaXTwitter />
          </Button>
        </Tooltip>
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
