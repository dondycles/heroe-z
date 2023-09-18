import Image from "next/image";
import Marquee from "react-fast-marquee";
import GlowingBorder from "../Styles/GlowingBorder";

import { MusicData } from "./music-data";
import { Button, Progress } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useMusicStore, useThemeStore } from "@/store";
import {
  PiPlayFill,
  PiPauseFill,
  PiStopFill,
  PiArrowFatLeftFill,
  PiArrowFatRightFill,
} from "react-icons/pi";

type PlayerStateTypes = {
  play: boolean;
  stop: boolean;
  index: number;
  volume: number;
  animate: "left" | "right" | undefined;
  progress: { time: { min: number; sec: number }; bar: number };
};
export default function MusicPlayer() {
  const [cycled, setCycled] = useState(false);
  const [hydrate, setHydrate] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const tracks = MusicData;

  const playerGlobalState = useMusicStore();
  const theme = useThemeStore();

  const audio = useRef<HTMLAudioElement>(null);
  const controls = useRef<HTMLDivElement>(null);
  const volumeBar = useRef<HTMLDivElement>(null);

  const [playerState, setPlayerState] = useState<PlayerStateTypes>({
    play: false,
    stop: false,
    index: 0,
    animate: undefined,
    volume: 0.5,
    progress: { time: { min: 0, sec: 0 }, bar: 0 },
  });

  const updateTimeAndProgress = () => {
    setPlayerState({
      ...playerState,
      progress: {
        bar: Math.floor(
          (Math.trunc(audio.current!.currentTime) * 100) /
            audio.current!.duration
        ),
        time: {
          min: Math.trunc(audio.current!.currentTime / 60),
          sec:
            Math.trunc(audio.current!.currentTime / 60) === 0
              ? Math.trunc(audio.current!.currentTime % 60)
              : Math.trunc(
                  audio.current!.currentTime %
                    (60 * Math.trunc(audio.current!.currentTime / 60))
                ),
        },
      },
    });
  };

  const playMusicOnMusicButtonClick = () => {
    // ? this is to play music at very moment MusicButton is clicked for the first time
    // ? hasInteracted is false at first render
    // ? but if the MusicButtn is pressed for the very first time, hasInteract will become true and this function will not work again unless browser is reloaded

    if (!hasInteracted && playerGlobalState.playMusic) {
      setPlayerState({ ...playerState, play: true });
      setHasInteracted(false);
      setTimeout(() => {
        setHasInteracted(true);
      }, 100);
    }
  };

  const playAndStopMusic = () => {
    if (!hydrate) return; // ? This function will only go if ALREADY mounted

    if (playerState.play) {
      setPlayerState({ ...playerState, stop: false });
      audio.current!.play();
    } else {
      audio.current!.pause();
      if (playerState.stop) {
        audio.current!.currentTime = 0;
        setPlayerState({
          ...playerState,
          progress: {
            bar: 0,
            time: {
              min: 0,
              sec: 0,
            },
          },
        });
      }
    }

    playerGlobalState.setPlayMusic(playerState.play);
  };

  const resetAndPlayNextMusic = () => {
    if (!hydrate) return; // ? This function will only go if ALREADY mounted

    setPlayerState({
      ...playerState,
      play: true,
      stop: false,
      progress: {
        bar: 0,
        time: {
          min: 0,
          sec: 0,
        },
      },
    });
    setTimeout(() => {
      audio.current!.play();
    }, 500);
  };

  const setVolume = (value: any) => {
    audio.current!.volume = value;
  };

  useEffect(() => {
    playAndStopMusic();
  }, [playerState.play]);

  useEffect(() => {
    resetAndPlayNextMusic();
  }, [playerState.index]);

  useEffect(() => {
    playMusicOnMusicButtonClick();
  }, [playerGlobalState.playMusic]);

  useEffect(() => {
    setVolume(Number(playerState.volume) / 100);
  }, [playerState.volume]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!cycled) return;
      setCycled((prev) => !prev);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [cycled]);

  useEffect(() => {
    setVolume(playerState.volume); //? playerState.volume is 0.5 at default
    setTimeout(() => {
      setHydrate(true); //? This is to trigger the functions that would only when hydrated or mounted
    }, 500);
  }, []);

  return (
    <motion.div
      onClick={() => {
        playerGlobalState.setShowPlayer(false);
      }}
      className={`fixed top-0 left-0 py-6 px-6 md:px-12 lg:px-24 xl:px-36 2xl:px-48 flex justify-start items-end h-[100dvh] w-screen duration-150  ${
        playerGlobalState.showPlayer
          ? " translate-x-0"
          : " pointer-events-none "
      }
      `}
    >
      <audio
        autoPlay={false}
        onTimeUpdate={updateTimeAndProgress}
        onEnded={() => {
          setPlayerState({
            ...playerState,
            index: playerState.index < 3 ? playerState.index + 1 : 0,
          });
        }}
        ref={audio}
        src={tracks[playerState.index].src}
        loop={false}
      />
      <AnimatePresence>
        {playerGlobalState.showPlayer && (
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
            className={`h-screen max-h-[104px] sm:max-h-[124px] w-screen max-w-full sm:max-w-[400px] rounded-xl p-3  flex flex-row gap-3 backdrop-blur-lg  glowing-border overflow-hidden after:bg-transparent 
            ${
              theme.mode === "dark"
                ? " shadow-[0_0_20px_#ff444466]"
                : " shadow-[0_0_20px_#0099ff66]"
            }`}
          >
            <GlowingBorder />

            <AnimatePresence>
              <motion.div
                key={tracks[playerState.index].title}
                initial={{
                  opacity: 0,
                  translateX:
                    playerState.animate === "right" ? "50px" : "-50px",
                }}
                animate={{ opacity: 1, translateX: "0px" }}
                exit={{
                  opacity: 0,
                  translateX: playerState.animate === "right" ? "0px" : "0px",
                }}
                className=" absolute top-[2px] left-[2px] bottom-[2px] right-[2px] z-[0]  pointer-events-none bg-primary/10 rounded-xl"
              >
                <Image
                  src={tracks[playerState.index].art}
                  alt={tracks[playerState.index].src}
                  fill
                  placeholder="blur"
                  className="w-full h-full object-cover rounded-xl brightness-50 opacity-75 blur-[1px] "
                />
              </motion.div>
            </AnimatePresence>

            <div
              className={`bg-transparent h-[100px]  aspect-square rounded-lg overflow-hidden hidden sm:block relative z-[2]`}
            >
              <AnimatePresence initial={false}>
                <motion.div
                  key={tracks[playerState.index].title}
                  initial={{ opacity: 0, translateX: "20px" }}
                  animate={{ opacity: 1, translateX: "0px" }}
                  exit={{ opacity: 0, translateX: "20px" }}
                  className="absolute top-0 left-0 w-full h-full"
                >
                  <Image
                    src={tracks[playerState.index].art}
                    alt={tracks[playerState.index].title}
                    className="object-cover w-full h-full"
                    quality={50}
                    placeholder="blur"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex flex-row gap-3 flex-1  z-[2]">
              <div
                ref={controls}
                className="flex flex-col-reverse flex-1 gap-1 sm:flex-col sm:gap-3 "
              >
                <Marquee
                  className="h-[16px] overflow-hidden"
                  speed={35}
                  loop={0}
                  pauseOnClick
                  pauseOnHover
                >
                  <span className="flex-1 mr-3 text-sm leading-none text-primary sm:text-base sm:font-montserrat">
                    {tracks[playerState.index].title}
                  </span>
                </Marquee>
                <div className="flex flex-row flex-1 gap-3">
                  <div
                    className={`bg-black h-[64px] aspect-square rounded-lg overflow-hidden block sm:hidden`}
                  >
                    <Image
                      src={tracks[playerState.index].art}
                      alt={tracks[playerState.index].title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col flex-1">
                    {audio.current && (
                      <div className="flex items-center gap-2 text-white ">
                        <p className="text-xs font-extralight">
                          0{playerState.progress.time.min}:
                          {playerState.progress.time.sec < 10
                            ? "0" + playerState.progress.time.sec
                            : playerState.progress.time.sec}
                        </p>
                        <Progress
                          aria-label="Music Progress Bar"
                          classNames={{
                            indicator: "bg-primary",
                            track:
                              "bg-primary/10  outline outline-[1px] outline-primary",
                          }}
                          size="sm"
                          value={playerState.progress.bar}
                        />
                        <p className="text-xs font-extralight">
                          {tracks[playerState.index].duration}
                        </p>
                      </div>
                    )}
                    <div className="flex flex-row items-center justify-center h-full gap-3 ">
                      <Button
                        onClick={() => {
                          setPlayerState({
                            ...playerState,
                            index:
                              playerState.index > 0
                                ? playerState.index - 1
                                : tracks.length - 1,
                            animate: "left",
                          });
                        }}
                        className=" h-[32px] min-w-[32px]  rounded-full p-0 bg-primary/10 text-primary sm:hover:bg-primary/20"
                      >
                        <PiArrowFatLeftFill />
                      </Button>
                      <Button
                        className={` h-[32px] min-w-[32px] sm:h-[44px] sm:min-w-[44px] rounded-full p-0 sm:hover:bg-primary/20 ${
                          !playerState.stop
                            ? "bg-primary text-content1 sm:hover:text-primary"
                            : "bg-primary/10 text-primary "
                        }`}
                        onClick={() => {
                          setPlayerState({
                            ...playerState,
                            play: !playerState.play,
                          });
                        }}
                      >
                        <AnimatePresence>
                          {playerState.play ? <PiPauseFill /> : <PiPlayFill />}
                        </AnimatePresence>
                      </Button>
                      <Button
                        className={` h-[32px] min-w-[32px] rounded-full p-0 sm:hover:bg-primary/20 ${
                          playerState.stop
                            ? "bg-primary text-content1 sm:hover:text-primary"
                            : "bg-primary/10 text-primary"
                        }`}
                        onClick={() => {
                          setPlayerState({
                            ...playerState,
                            play: false,
                            stop: true,
                          });
                        }}
                      >
                        <PiStopFill />
                      </Button>
                      <Button
                        onClick={() => {
                          // audio.current!.currentTime = 180;

                          setPlayerState({
                            ...playerState,
                            index:
                              playerState.index < tracks.length - 1
                                ? playerState.index + 1
                                : 0,
                            animate: "right",
                          });
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
                onDrag={(e) => {
                  if (!volumeBar.current || !controls.current) return;
                  setPlayerState({
                    ...playerState,
                    volume:
                      ((volumeBar.current.getBoundingClientRect().bottom -
                        e.clientY) /
                        controls.current.clientHeight) *
                      100,
                  });
                }}
                onClick={(e) => {
                  if (!volumeBar.current || !controls.current) return;
                  setPlayerState({
                    ...playerState,
                    volume:
                      ((volumeBar.current.getBoundingClientRect().bottom -
                        e.clientY) /
                        controls.current.clientHeight) *
                      100,
                  });
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
                    height: audio.current!.volume * 100 + "%",
                    maxHeight: controls.current
                      ? controls.current!.clientHeight + "px"
                      : "100%",
                  }}
                  className={`w-[6px] bg-primary rounded-full`}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
