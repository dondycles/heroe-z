"use client";
import { Button } from "@nextui-org/react";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import { useMusicStore } from "@/store";
export default function MusicButtn() {
  const music = useMusicStore();
  return (
    <Button
      onClick={() => music.setShowPlayer(!music.showPlayer)}
      className={`z-[21] fixed btn-default bottom-6 left-6 md:left-32 lg:left-48 xl:left-72 2xl:left-96  rounded-full text-xl p-0 min-w-[44px] ${
        music.showPlayer
          ? "bg-primaryblue text-content1 sm:hover:bg-primaryblue/10 sm:hover:text-primaryblue"
          : "text-primaryblue bg-primaryblue/10 "
      }`}
    >
      {music.playMusic ? <MdMusicNote /> : <MdMusicOff />}
    </Button>
  );
}
