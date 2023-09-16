"use client";
import Image from "next/image";
import lgwallpaperdark from "@/public/images/wallpaper/lg-dark-wallpaper.webp";
// import smwallpaperdark from "@/public/sm-dark-wallpaper.webp";
import lgwallpaper from "@/public/images/wallpaper/lg-wallpaper.webp";
import smwallpaper from "@/public/images/wallpaper/sm-wallpaper.webp";
import { useEffect, useState } from "react";
import { useThemeStore } from "@/store";
import { AnimatePresence, motion } from "framer-motion";
export default function Wallpaper() {
  const theme = useThemeStore();
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      setWindowSize({ width: 0, height: 0 });
    };
  }, []);

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen z-[-1]">
      <AnimatePresence>
        {theme.mode === "light" ? (
          <motion.picture
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={"lightmode"}
            className="w-full h-full flex"
          >
            {windowSize.width > 620 ? (
              <Image
                key={"lgwallpaper"}
                className="object-cover"
                src={lgwallpaper}
                alt="HeroeZ"
                placeholder="blur"
                quality={100}
                priority
                width={8000}
                height={4500}
              />
            ) : (
              <Image
                key={"smwallpaper"}
                className="fixed top-0 left-0 w-screen h-screen object-cover"
                src={smwallpaper}
                placeholder="blur"
                alt="HeroeZ"
                quality={100}
                priority
              />
            )}
          </motion.picture>
        ) : (
          <motion.picture
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={"darkmode"}
            className="w-full h-full flex"
          >
            {/* {windowSize.width > 620 ? ( */}
            <Image
              key={"lgwallpaperdark"}
              className="object-cover"
              src={lgwallpaperdark}
              placeholder="blur"
              alt="HeroeZ"
              quality={100}
              width={8000}
              height={4500}
              priority
            />
            {/* ) : (
              <Image
                key={"smwallpaperdark"}
                className="fixed top-0 left-0 w-screen h-screen object-cover"
                src={lgwallpaperdark}
                placeholder="blur"
                alt="HeroeZ"
                quality={100}
                priority
              />
            )} */}
          </motion.picture>
        )}
      </AnimatePresence>
    </div>
  );
}
