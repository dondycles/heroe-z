"use client";
import { motion, AnimatePresence } from "framer-motion";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useNavigationStore } from "@/store";
import { Button } from "@nextui-org/button";
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
} from "react-icons/bs";
import Link from "next/link";
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
    {
      title: "CONNECT WALLET",
      href: "/connectwallet",
      icon: <BsWallet />,
    },
    { title: "HOME", href: "/", icon: <BsHouse /> },
    { title: "ABOUT", href: "/about", icon: <BsHeart /> },
    { title: "ROAD MAP", href: "/road-map", icon: <BsMap /> },
    {
      title: "HEROEZ UNIVERSITY",
      href: "/heroez-university",
      icon: <BsBuildings />,
    },
    {
      title: "QUEST SYSTEM",
      href: "/quest-system",
      icon: <BsLightbulb />,
    },
    { title: "WEB NOVEL", href: "/web-novel", icon: <BsBook /> },
    { title: "STUDIO Z", href: "/studio-z", icon: <BsRocket /> },
    { title: "GALLERY", href: "/gallery", icon: <BsCollection /> },
    { title: "UPDATES", href: "/updates", icon: <BsCheckCircle /> },
    { title: "TEAM", href: "/team", icon: <BsPeople /> },
  ];

  useEffect(() => {
    if (menuState) {
      setTimeout(() => {
        setAnimateOptions(true);
      }, 300);
    } else setAnimateOptions(false);
  }, [menuState]);

  return (
    <div
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
            className=" w-full gap-6  sm:w-2/3 h-full bg-background/90  px-6 pb-6 flex flex-col "
          >
            <motion.div
              layout
              className="w-full min-h-[96px]  py-6 "
            ></motion.div>
            <motion.ul className="flex flex-col gap-1 overflow-y-auto overflow-x-hidden">
              <AnimatePresence>
                {animateOptions && (
                  <>
                    {options.map((option, i) => {
                      return (
                        <motion.li key={i}>
                          <motion.button
                            onClick={() => {
                              navigation.setWillNavigateTo(option.href);
                              closeMenu();
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: (0.1 + i) / 10 }}
                            className={`w-full btn-default rounded-lg text-xs sm:hover:bg-primaryblue/10 sm:hover:text-primaryblue sm:hover:border-[1px] sm:border-transparent
                          ${
                            option.title === "CONNECT WALLET" &&
                            "pointer-events-none"
                          } ${
                              option.href.toLowerCase() ===
                              pathname!.toLowerCase()
                                ? " pointer-events-none bg-primary text-content1"
                                : "bg-transparent text-content3"
                            }`}
                          >
                            <span className="text-lg">{option.icon}</span>
                            <span>{option.title.toUpperCase()}</span>
                          </motion.button>
                        </motion.li>
                      );
                    })}
                  </>
                )}
              </AnimatePresence>
            </motion.ul>
            <motion.footer
              layout
              className=" text-2xl flex flex-col gap-4 justify-center items-center mt-auto mb-0 "
            >
              <div className="flex gap-4 rounded-full bg-accent text-content3 p-6 w-full items-center justify-center bg-primaryred">
                <Link href={"https://discord.gg/64nt9zk6x7"} target="_blank">
                  <BsDiscord />
                </Link>
                <Link
                  href={"https://twitter.com/HEROEZofficial"}
                  target="_blank"
                >
                  <BsTwitter />
                </Link>
              </div>
              <p className="text-xs mb-0 mt-auto text-neutral">HeroeZ 2023</p>
            </motion.footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
