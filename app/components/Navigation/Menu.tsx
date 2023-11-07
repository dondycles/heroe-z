"use client";
import { motion, AnimatePresence } from "framer-motion";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useNavigationStore } from "@/store";
import { Button, ButtonGroup, Divider } from "@nextui-org/react";
import {
  BsWallet,
  BsHouse,
  BsHeart,
  BsMap,
  BsBuildings,
  BsLightbulb,
  BsBook,
  BsRocket,
  BsCollection,
  BsCheckCircle,
  BsPeople,
  BsWalletFill,
  BsHouseFill,
  BsHeartFill,
  BsMapFill,
  BsBuildingsFill,
  BsLightbulbFill,
  BsBookFill,
  BsRocketFill,
  BsCollectionFill,
  BsCheckCircleFill,
  BsPeopleFill,
} from "react-icons/bs";
import Link from "next/link";
import ThemeButton from "../Theme/ThemeButton";
import { SiFandom, SiOpensea } from "react-icons/si";
import { container, item } from "@/transitions";
export default function ({
  menuState,
  closeMenu,
}: {
  menuState: boolean;
  closeMenu: () => void;
}) {
  const [animateOptions, setAnimateOptions] = useState(false);
  const pathname = usePathname();
  const navigation = useNavigationStore();
  let options = [
    // {
    //   title: "CONNECT WALLET",
    //   href: "/connectwallet",
    //   icon: <BsWallet />,
    //   filledIcon: <BsWalletFill />,
    // },
    // {
    //   title: "WALLET CHECKER",
    //   href: "/walletchecker",
    //   icon: <BsWallet />,
    //   filledIcon: <BsWalletFill />,
    // },
    {
      title: "HOME",
      href: "/",
      icon: <BsHouse />,
      filledIcon: <BsHouseFill />,
    },
    {
      title: "ABOUT",
      href: "/about",
      icon: <BsHeart />,
      filledIcon: <BsHeartFill />,
    },
    {
      title: "ROAD MAP",
      href: "/road-map",
      icon: <BsMap />,
      filledIcon: <BsMapFill />,
    },
    {
      title: "HEROEZ UNIVERSITY",
      href: "/heroez-university",
      icon: <BsBuildings />,
      filledIcon: <BsBuildingsFill />,
    },
    {
      title: "QUEST SYSTEM",
      href: "/quest-system",
      icon: <BsLightbulb />,
      filledIcon: <BsLightbulbFill />,
    },
    {
      title: "WEB NOVEL",
      href: "/web-novel",
      icon: <BsBook />,
      filledIcon: <BsBookFill />,
    },
    // {
    //   title: "STUDIO Z",
    //   href: "/studio-z",
    //   icon: <BsRocket />,
    //   filledIcon: <BsRocketFill />,
    // },
    {
      title: "GALLERY",
      href: "/gallery",
      icon: <BsCollection />,
      filledIcon: <BsCollectionFill />,
    },
    {
      title: "UPDATES",
      href: "/updates",
      icon: <BsCheckCircle />,
      filledIcon: <BsCheckCircleFill />,
    },
    // {
    //   title: "TEAM",
    //   href: "/team",
    //   icon: <BsPeople />,
    //   filledIcon: <BsPeopleFill />,
    // },
  ];

  useEffect(() => {
    if (menuState) {
      setTimeout(() => {
        setAnimateOptions(true);
      }, 300);
    } else setAnimateOptions(false);
  }, [menuState]);

  return (
    <motion.div
      onClick={() => closeMenu()}
      className={`fixed top-0 left-0 w-screen h-[100dvh]  z-50 duration-500 flex justify-end  ${
        !menuState ? "pointer-events-none " : " bg-black/25"
      }`}
    >
      <AnimatePresence>
        {menuState && (
          <motion.div
            layout
            initial={{ x: "50%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "10%", opacity: 0 }}
            transition={{
              duration: 0.3,
              type: "spring",
              damping: 15,
            }}
            onClick={(e) => e.stopPropagation()}
            className=" w-full gap-3  sm:w-2/3 h-full bg-background/90  px-3 pb-6 flex flex-col "
          >
            <Divider className="mt-24" />
            <motion.ul className="flex flex-col gap-1 overflow-y-auto overflow-x-hidden ">
              <AnimatePresence>
                {animateOptions && (
                  <>
                    {options.map((option, i) => {
                      return (
                        <motion.li
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: (0.1 + i) / 10 }}
                          key={i}
                        >
                          <Button
                            onClick={() => {
                              if (option.href === "/connectwallet") return;
                              if (option.href === "/walletchecker") {
                                navigation.setOpenWalletChecker(true);
                                closeMenu();
                                return;
                              }
                              if (option.href === pathname) return;
                              navigation.setWillNavigateTo(option.href);
                              setTimeout(() => {
                                closeMenu();
                              }, 500);
                            }}
                            className={` w-full btn-default rounded-lg text-xs sm:hover:bg-primary/10 sm:hover:text-primary sm:hover:border-[1px] sm:border-transparent 
                           ${
                             option.href.toLowerCase() ===
                             pathname!.toLowerCase()
                               ? " pointer-events-none  bg-primary text-content1"
                               : option.href === "/connectwallet"
                               ? "bg-foreground/10 cursor-not-allowed"
                               : " bg-transparent text-content3"
                           }`}
                          >
                            <span className="text-lg">
                              {option.href.toLowerCase() ===
                              pathname!.toLowerCase()
                                ? option.filledIcon
                                : option.icon}
                            </span>
                            <span>{option.title.toUpperCase()}</span>
                          </Button>
                        </motion.li>
                      );
                    })}
                  </>
                )}
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: (0.1 + 10) / 10 }}
                  key={"wallet"}
                  className="flex gap-3 justify-center items-center"
                >
                  <Button
                    onClick={() => {
                      navigation.setWillNavigateTo(
                        "https://mint.heroezofficial.com"
                      );
                    }}
                    className="w-full btn-default rounded-lg text-xs sm:hover:bg-primary/10 sm:hover:text-primary sm:hover:border-[1px] sm:border-transparent  bg-transparent text-content3"
                  >
                    <span className="text-2xl text-primary">
                      <BsWalletFill />
                    </span>
                    MINT
                  </Button>
                  <Divider orientation="vertical" />
                  <Button
                    onClick={() => {
                      navigation.setOpenWalletChecker(true);
                      closeMenu();
                    }}
                    className=" w-full btn-default rounded-lg text-xs sm:hover:bg-primary/10 sm:hover:text-primary sm:hover:border-[1px] sm:border-transparent  bg-transparent text-content3"
                  >
                    <span className="text-2xl text-primary">
                      <BsWalletFill />
                    </span>
                    WALLET CHECKER
                  </Button>
                </motion.li>
              </AnimatePresence>
            </motion.ul>

            <motion.footer
              layout
              className=" text-2xl flex flex-col gap-3 justify-center items-center mt-auto mb-0 "
            >
              <div className="w-full flex flex-row-reverse items-center justify-between sm:flex-col gap-6">
                <div className="flex items-center gap-1 mr-0 ml-auto">
                  <span className="w-fit  text-xs">Dark Mode:</span>
                  <ThemeButton />
                </div>

                <Divider orientation="vertical" className="  flex sm:hidden" />
                <div className="flex gap-2 rounded-xl bg-accent sm:text-content1 sm:p-6 sm:w-full items-center justify-center sm:bg-secondary">
                  <Link href={"https://discord.gg/64nt9zk6x7"} target="_blank">
                    <BsDiscord />
                  </Link>
                  <Divider
                    orientation="vertical"
                    className=" bg-background hidden sm:flex"
                  />
                  <Link
                    href={"https://twitter.com/HEROEZofficial"}
                    target="_blank"
                  >
                    <BsTwitter />
                  </Link>
                  <Divider
                    orientation="vertical"
                    className=" bg-background hidden sm:flex"
                  />
                  <Link
                    href={"https://heroez.fandom.com/wiki/HEROEZ_Wiki"}
                    target="_blank"
                  >
                    <SiFandom />
                  </Link>
                  <Divider
                    orientation="vertical"
                    className=" bg-background hidden sm:flex"
                  />
                  <Link
                    href={"https://opensea.io/collection/heroez"}
                    target="_blank"
                  >
                    <SiOpensea />
                  </Link>
                </div>
              </div>
              <p className="text-xs mb-0 mt-auto text-neutral">HeroeZ 2023</p>
            </motion.footer>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
