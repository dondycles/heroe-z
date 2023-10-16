"use client";
import { Button } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/tooltip";
import { AnimatePresence, motion } from "framer-motion";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import { useAnimateStore, useMusicStore, useThemeStore } from "@/store";

import GlowingBorder from "../Styles/GlowingBorder";
import { useState } from "react";

export default function MusicButtn() {
  const music = useMusicStore();
  const theme = useThemeStore();
  const animate = useAnimateStore();
  const [showTip, setShowTip] = useState(true);
  return (
    <AnimatePresence initial={false} mode="wait">
      <Tooltip
        style={{ zIndex: 0 }}
        showArrow={true}
        isOpen={showTip && animate.mode}
        className={`${theme.mode} text-white`}
        classNames={{
          arrow: `${theme.mode} bg-primary `,
        }}
        color="primary"
        closeDelay={0}
        delay={0}
        placement="right"
        content="Click to play"
      >
        {!music.showPlayer && (
          <motion.div
            key={"audiobutton"}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring" }}
            className={`bottom-6 fixed left-3 md:left-12 lg:left-24 xl:left-36 2xl:left-48 z-[21]`}
          >
            <Button
              onClick={() => {
                music.setShowPlayer(!music.showPlayer);
                music.setPlayMusic(true);
                setShowTip(false);
              }}
              className={` rounded-full text-xl p-0 h-[32px] min-w-[32px] aspect-square glowing-border after:rounded-full after:bg-background/80 ${
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
      </Tooltip>
    </AnimatePresence>
  );
}
