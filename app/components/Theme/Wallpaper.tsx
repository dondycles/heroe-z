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
        {/* {windowSize.width > 620 ? ( */}
        <Image
          key={"lgwallpaper"}
          className={` absolute top-0 left-0 w-full h-full object-cover duration-300 ${
            theme.mode === "dark" ? "opacity-0" : "opacity-100"
          }`}
          src={lgwallpaper}
          alt="HeroeZ"
          placeholder="empty"
          quality={100}
          priority
        />
        <Image
          key={"lgwallpaperdark"}
          className={` absolute top-0 left-0 w-full h-full object-cover duration-300 ${
            theme.mode === "light" ? "opacity-0" : "opacity-100"
          }`}
          src={lgwallpaperdark}
          placeholder="empty"
          alt="HeroeZ"
          quality={100}
          priority
        />
        {/*) : (
              <Image
                key={"smwallpaper"}
                className="fixed top-0 left-0 w-screen h-screen object-cover"
                src={smwallpaper}
                       placeholder="empty"
                alt="HeroeZ"
                quality={100}
                priority
              />
            )}
           */}
      </AnimatePresence>
      <div className="fixed top-0 left-0 h-full w-full z-[-1] spin-slow">
        <Image
          priority
          quality={50}
          src={circularlogo}
          placeholder="empty"
          alt="Circular Logo"
          fill
          className="w-full h-full object-cover sm:object-contain overflow-visible "
        />
      </div>
    </div>
  );
}
