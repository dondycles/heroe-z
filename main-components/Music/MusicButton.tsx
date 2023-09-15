"use client";
import { Button } from "@nextui-org/react";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import { useMusicStore, useThemeStore } from "@/store";
import GlowingBorder from "../Styles/GlowingBorder";
import { AnimatePresence, motion } from "framer-motion";
export default function MusicButtn() {
  const music = useMusicStore();
  const theme = useThemeStore();
  return (
    <AnimatePresence initial={false}>
      {!music.showPlayer && (
        <motion.div
          key={"audiobutton"}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: "spring" }}
          className={`fixed bottom-6 left-6 md:left-12 lg:left-24 xl:left-36 2xl:left-48 z-[21]`}
        >
          <Button
            onClick={() => {
              music.setShowPlayer(!music.showPlayer);
              music.setPlayMusic(true);
            }}
            className={` btn-default  rounded-full text-xl p-0 min-w-[44px] glowing-border after:rounded-full after:bg-background/80 ${
              music.showPlayer
                ? "bg-primary after:bg-primary sm:hover:after:bg-transparent text-content1 sm:hover:bg-primary/10 sm:hover:text-primary"
                : "text-primary bg-primary/10 sm:hover:after:bg-transparent"
            }
      ${
        theme.mode === "dark"
          ? " shadow-[0_0_20px_#ff444466]"
          : " shadow-[0_0_20px_#0099ff66]"
      }
      `}
          >
            {music.playMusic ? <MdMusicNote /> : <MdMusicOff />}
            <GlowingBorder />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
