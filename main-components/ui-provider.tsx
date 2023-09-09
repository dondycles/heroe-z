"use client";
import "@/app/globals.css";
import { useThemeStore } from "@/store";
import { NextUIProvider } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Wallpaper from "./Theme/Wallpaper";
import AnnouncementBar from "./Notification/AnnouncementBar";
import TopNav from "./Navigation/TopNav";

export function Providers({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState<Boolean>(false);
  const theme = useThemeStore();
  useEffect(() => {
    setHydrated(true);
  }, []);
  return (
    <NextUIProvider>
      <AnimatePresence>
        {hydrated ? (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`${theme.mode} bg-transparent relative text-content3`}
          >
            <TopNav />
            {children}
            <AnnouncementBar />
            <Wallpaper />
          </motion.main>
        ) : (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed top-0 left-0 z-50 w-screen h-screen  font-bold flex items-center justify-center  bg-background
             
    `}
          ></motion.section>
        )}
      </AnimatePresence>
    </NextUIProvider>
  );
}
