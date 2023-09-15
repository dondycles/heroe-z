"use client";
import { Button } from "@nextui-org/react";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import { useMusicStore, useThemeStore } from "@/store";
import GlowingBorder from "../Styles/GlowingBorder";
export default function MusicButtn() {
  const music = useMusicStore();
  const theme = useThemeStore();
  return (
    <Button
      onClick={() => music.setShowPlayer(!music.showPlayer)}
      className={`z-[21] fixed btn-default bottom-6 left-6 md:left-12 lg:left-24 xl:left-36 2xl:left-48 rounded-full text-xl p-0 min-w-[44px] glowing-border after:rounded-full ${
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
  );
}
