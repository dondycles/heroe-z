import { useMusicStore, useThemeStore } from "@/store";
import { Button, Progress } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

import {
  PiPlayFill,
  PiPauseFill,
  PiStopFill,
  PiArrowFatLeftFill,
  PiArrowFatRightFill,
} from "react-icons/pi";
import music0 from "@/public/music0.png";
import music1 from "@/public/music1.jpg";
import music2 from "@/public/music2.png";
import music3 from "@/public/music3.png";
import music4 from "@/public/music4.png";
import Image from "next/image";
import GlowingBorder from "../Styles/GlowingBorder";

export default function MusicPlayer() {
  const musicState = useMusicStore();
  const theme = useThemeStore();
  const [hasInteracted, setHasInteracted] = useState(false);
  const volumeBar = useRef<HTMLDivElement>(null);
  const controls = useRef<HTMLDivElement>(null);
  const [cycled, setCycled] = useState(false);
  const [hydrate, setHydrate] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);
  const [stopMusic, setStopMusic] = useState(false);
  const [volumeThumb, setVolumeThumb] = useState<number | null>(null);
  const [musicIndex, setMusicIndex] = useState(0);
  const [audioCurrentTime, setAudioCurrentTime] = useState({ min: 0, sec: 0 });
  const [audioDuration, setAudioDuration] = useState({ min: 0, sec: 0 });
  const [progressBarValue, setProgressBarValue] = useState(0);
  const [animationDirection, setAnimationDirection] = useState<
    "left" | "right" | ""
  >("");
  const audio = useRef<HTMLAudioElement>(null);

  const tracks = [
    {
      title:
        "My Hero Academia OST - You Say Run + Jet Set Run (You Say Run v2)",
      src: "/music0.mp3",
      art: music0,
    },
    {
      title: "The Weeknd - Is There Someone Else?",
      src: "/music1.mp3",
      art: music1,
    },
    {
      title: "Lola Amour - Raining In Manila",
      src: "/music2.mp3",
      art: music2,
    },
    { title: "V - Slow Dancing", src: "/music3.mp3", art: music3 },
    { title: "EXO - Cream Soda", src: "/music4.mp3", art: music4 },
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
    if (playMusic) {
      setStopMusic(false);
      audio.current!.play();
      setTimeout(() => {
        setAudioDuration({
          min: Math.trunc(audio.current!.duration / 60),
          sec: Math.trunc(
            audio.current!.duration %
              (60 * Math.trunc(audio.current!.duration / 60))
          ),
        });
      }, 50);
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
      setAudioDuration({
        min: Math.trunc(audio.current!.duration / 60),
        sec: Math.trunc(
          audio.current!.duration %
            (60 * Math.trunc(audio.current!.duration / 60))
        ),
      });
    }, 500);
  }, [musicIndex]);

  useEffect(() => {
    audio.current!.volume = Number(volumeThumb) / 100;
  }, [volumeThumb]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!cycled) return;
      setCycled((prev) => !prev);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [cycled]);

  useEffect(() => {
    if (!hasInteracted && musicState.playMusic) {
      setPlayMusic(true);
      setHasInteracted(false);
      setTimeout(() => {
        setHasInteracted(true);
      }, 100);
    }
  }, [musicState.playMusic]);

  useEffect(() => {
    setHydrate(true);

    audio.current!.volume = 0.5;
  }, []);
  return (
    <motion.div
      onClick={() => {
        musicState.setShowPlayer(false);
      }}
      className={`fixed top-0 left-0 py-6 px-6 md:px-12 lg:px-24 xl:px-36 2xl:px-48 flex justify-start items-end h-[100dvh] w-screen duration-150  ${
        musicState.showPlayer ? " translate-x-0" : " pointer-events-none "
      }
      `}
    >
      <audio
        autoPlay={false}
        onTimeUpdate={updateTimeAndProgress}
        onEnded={() => setMusicIndex((prev) => (prev < 3 ? prev + 1 : 0))}
        ref={audio}
        src={tracks[musicIndex].src}
        loop={false}
      />
      <AnimatePresence>
        {musicState.showPlayer && (
          <motion.div
            key={"audioplayer"}
            initial={{
              transformOrigin: "20px 80%",
              opacity: 0,
              scale: 0,
              skew: "-50deg",
            }}
            animate={{
              transformOrigin: "20px 80%",
              opacity: 1,
              scale: 1,
              skew: "0deg",
            }}
            exit={{
              transformOrigin: "20px 80%",
              opacity: 0,
              scale: 0,
              skew: "-50deg",
            }}
            transition={{ type: "spring", damping: 12 }}
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={`h-screen max-h-[104px] sm:max-h-[124px] w-screen max-w-[280px] sm:max-w-[400px] rounded-xl p-3  flex flex-row gap-3 backdrop-blur-lg  glowing-border overflow-hidden after:bg-transparent
      ${
        theme.mode === "dark"
          ? " shadow-[0_0_20px_#ff444466]"
          : " shadow-[0_0_20px_#0099ff66]"
      }
        
        `}
          >
            <GlowingBorder />

            <AnimatePresence>
              <motion.div
                key={tracks[musicIndex].title}
                initial={{
                  opacity: 0,
                  translateX: animationDirection === "right" ? "50px" : "-50px",
                }}
                animate={{ opacity: 1, translateX: "0px" }}
                exit={{
                  opacity: 0,
                  translateX: animationDirection === "right" ? "0px" : "0px",
                }}
                className=" absolute top-[2px] left-[2px] bottom-[2px] right-[2px] z-[0]  pointer-events-none bg-primary/10 rounded-xl"
              >
                <Image
                  src={tracks[musicIndex].art}
                  alt={tracks[musicIndex].src}
                  fill
                  placeholder="blur"
                  className="w-full h-full object-cover rounded-xl brightness-50 opacity-75 blur-[1px] "
                ></Image>
              </motion.div>
            </AnimatePresence>

            <div
              className={`bg-transparent h-[100px]  aspect-square rounded-lg overflow-hidden hidden sm:block relative z-[2]`}
            >
              <AnimatePresence initial={false}>
                <motion.div
                  key={tracks[musicIndex].title}
                  initial={{ opacity: 0, translateX: "20px" }}
                  animate={{ opacity: 1, translateX: "0px" }}
                  exit={{ opacity: 0, translateX: "20px" }}
                  className="absolute top-0 left-0 h-full w-full"
                >
                  <Image
                    src={tracks[musicIndex].art}
                    alt={tracks[musicIndex].title}
                    className="w-full h-full object-cover"
                    quality={50}
                    placeholder="blur"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex flex-row gap-3 flex-1  z-[2]">
              <div
                ref={controls}
                className="flex flex-1 flex-col-reverse sm:flex-col gap-1 sm:gap-3 h-fit"
              >
                <Marquee
                  className="h-[16px] overflow-hidden"
                  speed={35}
                  loop={0}
                  pauseOnClick
                  pauseOnHover
                >
                  <span className="text-primary text-sm sm:text-base leading-none  sm:font-montserrat flex-1 mr-3">
                    {tracks[musicIndex].title}
                  </span>
                </Marquee>
                <div className="flex gap-3 flex-row flex-1">
                  <div
                    className={`bg-black h-[60px] aspect-square rounded-lg overflow-hidden block sm:hidden`}
                  >
                    <Image
                      src={tracks[musicIndex].art}
                      alt={tracks[musicIndex].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-3 flex-1">
                    {audio.current && (
                      <div className="flex items-center gap-2 text-xs text-white ">
                        <p className="font-extralight font-kanit">
                          0{audioCurrentTime.min}:
                          {audioCurrentTime.sec < 10
                            ? "0" + audioCurrentTime.sec
                            : audioCurrentTime.sec}
                        </p>
                        <Progress
                          aria-label="Music Progress Bar"
                          classNames={{
                            indicator: "bg-primary",
                            track:
                              "bg-primary/10  outline outline-[1px] outline-primary",
                          }}
                          size="sm"
                          value={progressBarValue}
                        />
                        <p className="font-extralight font-kanit">
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
                          setAnimationDirection("left");
                          setMusicIndex((prev) =>
                            prev > 0 ? prev - 1 : tracks.length - 1
                          );
                        }}
                        className=" h-[32px] min-w-[32px]  rounded-full p-0 bg-primary/10 text-primary sm:hover:bg-primary/20"
                      >
                        <PiArrowFatLeftFill />
                      </Button>
                      <Button
                        className={` h-[32px] min-w-[32px] sm:h-[44px] sm:min-w-[44px] rounded-full p-0 sm:hover:bg-primary/20 ${
                          !stopMusic
                            ? "bg-primary text-content1 sm:hover:text-primary"
                            : "bg-primary/10 text-primary "
                        }`}
                        onClick={() => setPlayMusic((prev) => !prev)}
                      >
                        <AnimatePresence>
                          {playMusic ? <PiPauseFill /> : <PiPlayFill />}
                        </AnimatePresence>
                      </Button>
                      <Button
                        className={` h-[32px] min-w-[32px] rounded-full p-0 sm:hover:bg-primary/20 ${
                          stopMusic
                            ? "bg-primary text-content1 sm:hover:text-primary"
                            : "bg-primary/10 text-primary"
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
                          setAnimationDirection("right");
                          setMusicIndex((prev) =>
                            prev < tracks.length - 1 ? prev + 1 : 0
                          );
                        }}
                        className=" h-[32px] min-w-[32px] rounded-full p-0 bg-primary/10 text-primary sm:hover:bg-primary/20"
                      >
                        <PiArrowFatRightFill />
                      </Button>
                    </div>
                  </div>
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
                className="w-[6px]  bg-primary/10 outline outline-[1px] outline-primary flex items-end rounded-full cursor-pointer "
                style={{
                  height: controls.current
                    ? controls.current!.clientHeight + "px"
                    : "100%",
                }}
              >
                <div
                  style={{
                    height: volumeThumb == null ? "50%" : volumeThumb + "%",
                    maxHeight: controls.current
                      ? controls.current!.clientHeight + "px"
                      : "100%",
                  }}
                  className={`w-[6px] bg-primary rounded-full `}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
