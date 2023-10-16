"use client";
import Image from "next/image";
import lgwallpaperdark from "@/public/images/wallpaper/lg-dark-wallpaper.webp";
// import smwallpaperdark from "@/public/sm-dark-wallpaper.webp";
import lgwallpaper from "@/public/images/wallpaper/lg-wallpaper.webp";
// import smwallpaper from "@/public/images/wallpaper/sm-wallpaper.webp";
import { useEffect, useRef, useState } from "react";
import { useThemeStore } from "@/store";
import { AnimatePresence, motion } from "framer-motion";
import circularlogo from "@/public/images/wallpaper/circular-logo.webp";

export default function Wallpaper() {
  const theme = useThemeStore();
  const [hydrated, setHydrated] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    if (hydrated) video.current?.play();
  }, [hydrated]);

  useEffect(() => {
    setHydrated(true);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      setWindowSize({ width: 0, height: 0 });
    };
  }, []);

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen z-[-1] bg-background ">
      <AnimatePresence>
        {theme.mode === "light" ? (
          <Image
            key={"lgwallpaper"}
            className={` absolute top-0 left-0 w-full h-full object-cover duration-300 `}
            src={lgwallpaper}
            alt="HeroeZ"
            placeholder="empty"
            quality={100}
            priority
          />
        ) : (
          <Image
            key={"lgwallpaperdark"}
            className={` absolute top-0 left-0 w-full h-full object-cover duration-300 `}
            src={lgwallpaperdark}
            placeholder="empty"
            alt="HeroeZ"
            quality={100}
            priority
          />
        )}
      </AnimatePresence>
      <div className="fixed top-0 left-[50%] translate-x-[-50%] h-[100dvh] w-[100dvh] z-[-1]">
        <Image
          priority
          quality={100}
          src={circularlogo}
          placeholder="empty"
          alt="Circular Logo"
          className="w-[100dvh] h-[100dvh] aspect-square  spin-slow"
        />
      </div>
    </div>
  );
}
