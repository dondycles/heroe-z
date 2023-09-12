import { useMusicStore } from "@/store";
import { Button, Progress } from "@nextui-org/react";
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  PiPlayFill,
  PiPauseFill,
  PiStopFill,
  PiArrowFatLeftFill,
  PiArrowFatRightFill,
} from "react-icons/pi";
import music1 from "@/public/music1.jpg";
import music2 from "@/public/music2.png";
import music3 from "@/public/music3.png";
import music4 from "@/public/music4.png";
import Image from "next/image";

export default function MusicPlayer() {
  const musicState = useMusicStore();
  const volumeBar = useRef<HTMLDivElement>(null);
  const controls = useRef<HTMLDivElement>(null);
  const [hydrate, setHydrate] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);
  const [stopMusic, setStopMusic] = useState(false);
  const [volumeThumb, setVolumeThumb] = useState<number | null>(null);
  const [musicIndex, setMusicIndex] = useState(0);
  const [audioCurrentTime, setAudioCurrentTime] = useState({ min: 0, sec: 0 });
  const [audioDuration, setAudioDuration] = useState({ min: 0, sec: 0 });
  const [progressBarValue, setProgressBarValue] = useState(0);
  const audio = useRef<HTMLAudioElement>(null);

  const tracks = [
    { title: "Is There Someone Else?", src: "/music1.mp3", art: music1 },
    { title: "Raining In Manila", src: "/music2.mp3", art: music2 },
    { title: "Slow Dancing", src: "/music3.mp3", art: music3 },
    { title: "Cream Soda", src: "/music4.mp3", art: music4 },
  ];

  const updateTimeAndProgress = () => {
    setProgressBarValue(
      Math.floor(
        (Math.trunc(audio.current!.currentTime) * 100) / audio.current!.duration
      )
    );
    setAudioCurrentTime({
      min: Math.trunc(audio.current!.currentTime / 60),
      sec:
        Math.trunc(audio.current!.currentTime / 60) === 0
          ? Math.trunc(audio.current!.currentTime % 60)
          : Math.trunc(
              audio.current!.currentTime %
                (60 * Math.trunc(audio.current!.currentTime / 60))
            ),
    });
  };

  useEffect(() => {
    if (!hydrate) return;
    audio.current!.volume = 0.5;
    if (playMusic) {
      setStopMusic(false);
      audio.current!.play();
    } else {
      audio.current!.pause();
      if (stopMusic) {
        audio.current!.currentTime = 0;
        setProgressBarValue(0);
        setAudioCurrentTime({ min: 0, sec: 0 });
      }
    }
    musicState.setPlayMusic(playMusic);
  }, [playMusic]);

  useEffect(() => {
    if (!hydrate) return;
    setPlayMusic(true);
    setStopMusic(false);
    setProgressBarValue(0);
    setAudioCurrentTime({ min: 0, sec: 0 });
    setTimeout(() => {
      audio.current!.play();
    }, 500);
  }, [musicIndex]);

  useEffect(() => {
    audio.current!.volume = Number(volumeThumb) / 100;
  }, [volumeThumb]);

  useEffect(() => {
    setHydrate(true);
  }, []);
  return (
    <div
      onClick={() => {
        musicState.setShowPlayer(false);
      }}
      className={`fixed top-0 left-0 py-6 px-6 md:px-32 lg:px-48 xl:px-72 2xl:px-96 flex justify-end items-end h-[100dvh] w-screen duration-150  ${
        musicState.showPlayer
          ? "opacity-100 translate-x-0"
          : "opacity-0 pointer-events-none "
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="h-fit w-full max-w-[250px] sm:w-fit sm:max-w-none rounded-xl p-3  duration-500 bg-background/5 flex flex-col sm:flex-row gap-3 backdrop-blur-lg outline-[1px] outline outline-primaryblue"
      >
        <audio
          autoPlay={false}
          onPlay={() => {
            setAudioDuration({
              min: Math.trunc(audio.current!.duration / 60),
              sec: Math.trunc(
                audio.current!.duration %
                  (60 * Math.trunc(audio.current!.duration / 60))
              ),
            });
          }}
          onTimeUpdate={updateTimeAndProgress}
          onEnded={() => setMusicIndex((prev) => (prev < 3 ? prev + 1 : 0))}
          ref={audio}
          src={tracks[musicIndex].src}
          loop={false}
        />
        <div
          style={{
            height: controls.current
              ? controls.current!.clientHeight + "px"
              : "100%",
          }}
          className={`bg-black aspect-square rounded-lg hidden sm:block overflow-hidden`}
        >
          <Image
            src={tracks[musicIndex].art}
            alt={tracks[musicIndex].title}
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className={`bg-black w-full aspect-square rounded-lg block sm:hidden overflow-hidden`}
        >
          <Image
            src={tracks[musicIndex].art}
            alt={tracks[musicIndex].title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-row gap-6 flex-1">
          <div ref={controls} className="flex flex-1 flex-col gap-3 h-fit">
            <p className="text-primaryblue font-montserrat flex-1">
              {tracks[musicIndex].title}{" "}
            </p>
            {audio.current && (
              <div className="flex items-center gap-2 text-xs text-white">
                <p>
                  0{audioCurrentTime.min}:
                  {audioCurrentTime.sec < 10
                    ? "0" + audioCurrentTime.sec
                    : audioCurrentTime.sec}
                </p>
                <Progress
                  aria-label="Music Progress Bar"
                  classNames={{
                    indicator: "bg-primaryblue",
                    track:
                      "bg-primaryblue/10  outline outline-[1px] outline-primaryblue",
                  }}
                  size="sm"
                  value={progressBarValue}
                />
                <p>
                  0{audioDuration.min}:
                  {audioDuration.sec < 10
                    ? "0" + audioDuration.sec
                    : audioDuration.sec}
                </p>
              </div>
            )}
            <div className="flex flex-row items-center justify-center gap-3 ">
              <Button
                onClick={() => {
                  setMusicIndex((prev) => (prev > 0 ? prev - 1 : prev));
                }}
                className=" h-[32px] min-w-[32px]  rounded-full p-0 bg-primaryblue/10 text-primaryblue"
              >
                <PiArrowFatLeftFill />
              </Button>
              <Button
                className={` h-[44px] min-w-[44px] rounded-full p-0 ${
                  !stopMusic
                    ? "bg-primaryblue text-content1"
                    : "bg-primaryblue/10 text-primaryblue"
                }`}
                onClick={() => setPlayMusic((prev) => !prev)}
              >
                <AnimatePresence>
                  {playMusic ? <PiPauseFill /> : <PiPlayFill />}
                </AnimatePresence>
              </Button>
              <Button
                className={` h-[32px] min-w-[32px] rounded-full p-0 ${
                  stopMusic
                    ? "bg-primaryblue text-content1"
                    : "bg-primaryblue/10 text-primaryblue"
                }`}
                onClick={() => {
                  setStopMusic(true);
                  setPlayMusic(false);
                }}
              >
                <PiStopFill />
              </Button>
              <Button
                onClick={() => {
                  // audio.current!.currentTime = 180;
                  setMusicIndex((prev) => (prev < 3 ? prev + 1 : 0));
                }}
                className=" h-[32px] min-w-[32px] rounded-full p-0 bg-primaryblue/10 text-primaryblue"
              >
                <PiArrowFatRightFill />
              </Button>
            </div>
          </div>
          <div
            ref={volumeBar}
            onDoubleClickCapture={() => console.log("ano")}
            onClick={(e) => {
              if (!volumeBar.current || !controls.current) return;
              setVolumeThumb(
                ((volumeBar.current.getBoundingClientRect().bottom -
                  e.clientY) /
                  controls.current.clientHeight) *
                  100
              );
            }}
            className="w-[8px]  bg-primaryblue/10 outline outline-[1px] outline-primaryblue flex items-end rounded-full cursor-pointer "
            style={{
              height: controls.current
                ? controls.current!.clientHeight + "px"
                : "100%",
            }}
          >
            <div
              style={{
                height: volumeThumb == null ? "50%" : volumeThumb + "0%",
                maxHeight: controls.current
                  ? controls.current!.clientHeight + "px"
                  : "100%",
              }}
              className={`w-[8px] bg-primaryblue rounded-full `}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
