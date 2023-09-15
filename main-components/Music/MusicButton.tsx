"use client";
import { Button } from "@nextui-org/react";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import { useMusicStore } from "@/store";
export default function MusicButtn() {
  const music = useMusicStore();
  return (
    <Button
      onClick={() => music.setShowPlayer(!music.showPlayer)}
      className={`z-[21] fixed btn-default bottom-6 left-6 md:left-12 lg:left-24 xl:left-36 2xl:left-48 rounded-full text-xl p-0 min-w-[44px] ${
        music.showPlayer
          ? "bg-primary text-content1 sm:hover:bg-primary/10 sm:hover:text-primary"
          : "text-primary bg-primary/10 "
      }`}
    >
      {music.playMusic ? <MdMusicNote /> : <MdMusicOff />}
    </Button>
  );
}
