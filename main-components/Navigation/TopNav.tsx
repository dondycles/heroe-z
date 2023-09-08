"use client";
import { useState, useEffect } from "react";
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
  useEffect(() => {
    if (!isMounted) return;
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
    setTimeout(() => {
      setIsNavigated(true);
      setIsMounted(true);
    }, 2000);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full px-6 md:px-32 lg:px-48 xl:px-72 2xl:px-96 flex justify-between items-center max-h-24 h-full z-[100] backdrop-blur-sm duration-500 ${
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
      <ThemeButton />

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
