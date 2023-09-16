"use client";
import GlowingBorder from "@/main-components/Styles/GlowingBorder";
import { useAnimateStore, useThemeStore } from "@/store";
import { container, item } from "@/transitions";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Kazma from "@/public/images/team/Kazma.webp";
import JovzkyAnimation from "@/public/images/team/JovzkyAnimation.webp";
import EscoCobarseth from "@/public/images/team/EscoCobarseth.webp";
import xJudaseth from "@/public/images/team/xJudaseth.webp";
import Fonso from "@/public/images/team/Fonso.webp";
import { useEffect, useState } from "react";
import { Chip, Divider } from "@nextui-org/react";

import {
  FaTiktok,
  FaDiscord,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa6";
import elixer from "@/public/images/icons/elixir.ico";
import rethinkable from "@/public/images/icons/rethinkable.ico";
import Link from "next/link";
export default function Component() {
  const theme = useThemeStore();
  const animate = useAnimateStore();
  const [animateGlowingBorder, setAnimateGlowingBorder] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [heroIndexToShow, setHeroIndexToShow] = useState(0);
  const team = [
    {
      name: "Kazma",
      moto: "Always believe.",
      roles: ["HEROEZ!", "Founder", "Creative Director"],
      description:
        "Animator/Illustrator for decades. Worked for numerous well-known brands such as but not limited to; MARVEL (Hitmonkey), Teenage Mutant Ninja Turtle (NETFLIX), Dora the explorer, LEGO etc.,",
      socials: null,
      communities: null,
      img: Kazma,
    },
    {
      name: "JovzkyAnimation",
      moto: "Imagination is more important than knowledge.",
      roles: ["HEROEZ!", "Co-founding", "Head Animator"],
      description:
        "Years of experience being Traditional Artist/Animator/Illustrator. Known as the guy who fan animated jujutsu kaisen panels and one piece.",
      socials: [
        { type: "fb", link: "https://facebook.com/jovzkieanimation" },
        { type: "ig", link: "https://instagram.com/jovzkieanimation" },
        { type: "yt", link: "https://youtube.com/c/jovzkieanimation" },
        { type: "tt", link: "https://tiktok.com/@jovzkieanimation" },
        { type: "x", link: "https://twitter.com/jovzkyanimation" },
      ],
      communities: null,
      img: JovzkyAnimation,
    },
    {
      name: "Fonso",
      moto: "Impossible is for the willing.",
      roles: [
        "HEROEZ!",
        "Head Strategist",
        "Collaborations/Partnerships Manager",
      ],
      description:
        "Living in the space for almost three years now and counting. I’ve handled a lot of projects as their Collaborations/Partnerships Manager and Head Strategist.",
      socials: [
        { type: "x", link: "https://twitter.com/fonsonftt" },
        { type: "dc", link: "https://discord.com/users/fonsonftt" },
      ],
      communities: ["Part of the PGodjira Family"],
      img: Fonso,
    },
    {
      name: "EscoCobarseth",
      moto: null,
      roles: ["HEROEZ!", "Strategist", "Collaborations/Partnerships Manager"],
      description:
        "Currently holding Alpha groups,Projects, outreach team, Agencies as Collab Manager.",
      socials: [
        { type: "x", link: "https://twitter.com/therealescoco" },
        {
          type: "dc",
          link: "https://discordapp.com/users/750254489763708949",
        },
        { type: "elixir", link: "https://elixir-corp.io/p/EscoCobarseth" },
      ],
      communities: [
        "Project ATAMA",
        "Dre’s Empire",
        "Triangle Web3",
        "1Minute Web3",
        "Zenogakki",
      ],
      img: EscoCobarseth,
    },
    {
      name: "xJudas.eth",
      moto: "The best way to predict the future is to create it.",
      roles: ["HEROEZ!", "Strategist", "Collaborations/Partnerships Manager"],
      description:
        "An NFT Holder of various projects, Professional and experienced in various web3 works like Project Outreach, Marketing Lead, Project Moderation and a Collab Manager. Already built great connections in web3 for the past. A dad in real life and a professional web3 guy.",
      socials: [
        { type: "x", link: "https://twitter.com/LuckNFTvOLtia_" },
        {
          type: "dc",
          link: "https://discordapp.com/users/862300377936560139",
        },
        { type: "rtk", link: "https://rethinkable.xyz/xJudas" },
      ],
      communities: ["Surgence", "AlphaPH", "IndexApp", "HouseHades"],
      img: xJudaseth,
    },
  ];
  useEffect(() => {
    if (showModal) {
      setTimeout(() => {
        setAnimateGlowingBorder(true);
      }, 500);
    } else {
      setTimeout(() => {
        setAnimateGlowingBorder(false);
      }, 150);
    }
  }, [showModal]);
  return (
    <AnimatePresence>
      {animate.mode && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          className=" flex flex-col gap-3 h-screen max-h-[calc(100%-44px)] "
        >
          <motion.p variants={item}>
            Meet the Founding heroes behind this epic journey.
          </motion.p>

          <motion.div
            variants={item}
            className=" max-h-full overflow-auto w-full  p-1 rounded-xl
            
            "
          >
            <motion.ul className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3    ">
              {team.map((hero, i) => {
                return (
                  <motion.li
                    onClick={() => {
                      setShowModal(true);
                      setHeroIndexToShow(i);
                    }}
                    variants={item}
                    key={hero.name}
                  >
                    <div
                      className={`border-none glowing-border relative overflow-hidden max-w-[500px] w-full h-auto aspect-square p-[2px] rounded-xl bg-transparent 
                      sm:hover:scale-[99%] cursor-pointer duration-150
                    
                    ${
                      theme.mode === "dark"
                        ? " drop-shadow-[0_0_4px_#ff444488]"
                        : " drop-shadow-[0_0_4px_#0099ff88]"
                    }
                    `}
                    >
                      <GlowingBorder />
                      <Image
                        className="object-cover w-full h-full rounded-xl"
                        quality={100}
                        src={hero.img}
                        alt={hero.name}
                        priority
                      />
                      <div
                        className={`justify-center overflow-hidden text-center py-1 absolute rounded-xl bottom-2 left-2 right-2 shadow-small z-10 backdrop-brightness-[30%] `}
                      >
                        <p className=" text-primary font-montserrat">
                          {hero.name}
                        </p>
                      </div>
                    </div>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>
          <motion.div
            onClick={() => setShowModal(false)}
            className={`fixed flex items-center justify-center top-0 left-0 bottom-0 right-0 overflow-hidden duration-150 p-6 ${
              showModal
                ? "backdrop-blur-sm backdrop-brightness-50"
                : "backdrop-blur-none backdrop-brightness-100 pointer-events-none"
            }`}
          >
            <div
              className={`max-h-[70dvh] h-screen max-w-[350px] w-screen    relative z-10 glowing-border rounded-xl overflow-hidden duration-500 
              ${showModal ? "opacity-100" : "opacity-0 pointer-events-none"}
              ${
                theme.mode === "dark"
                  ? " drop-shadow-[0_0_4px_#ff444488]"
                  : " drop-shadow-[0_0_4px_#0099ff88]"
              }
              `}
            >
              <div className="absolute top-0 left-0 bottom-0 right-0">
                <div
                  key={"glowingborder"}
                  className={`absolute bg-gradient-to-b blur-lg from-primary via-transparent to-primary top-[0dvh] left-[-350px] translate-x-[-50%] translate-y-[-50%]   aspect-square w-auto h-[100dvh] object-center  z-[-1] rotationalpanelborder duration-[2000ms] pointer-events-none `}
                />
              </div>
              <div
                className={`absolute top-[12px] left-[12px] right-[12px] bottom-[12px] z-10 overflow-y-auto overflow-x-hidden rounded-xl`}
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className=" rounded-xl flex gap-3 flex-col"
                >
                  <Image
                    src={team[heroIndexToShow].img}
                    alt={team[heroIndexToShow].name}
                    placeholder="blur"
                    quality={100}
                    priority
                    className="rounded-xl w-full h-auto object-cover"
                  />
                  <div>
                    <p className="font-montserrat text-primary text-2xl">
                      {team[heroIndexToShow].name}
                    </p>
                    {team[heroIndexToShow].moto && (
                      <p className=" text-warning italic text-sm">
                        "{team[heroIndexToShow].moto}"
                      </p>
                    )}
                  </div>
                  <Divider className="" />
                  <div className="flex flex-wrap gap-1">
                    {team[heroIndexToShow].roles.map((role) => {
                      return (
                        <Chip
                          key={role}
                          color={
                            role.includes("HEROEZ!")
                              ? "primary"
                              : role.includes("Founder")
                              ? "secondary"
                              : "warning"
                          }
                          variant="dot"
                          size="sm"
                          className={
                            role.includes("HEROEZ!")
                              ? "border-primary"
                              : role.includes("Founder")
                              ? "border-secondary"
                              : "border-warning"
                          }
                        >
                          <p>{role}</p>
                        </Chip>
                      );
                    })}
                  </div>
                  <Divider className="" />
                  <p className="text-sm">{team[heroIndexToShow].description}</p>

                  {team[heroIndexToShow].communities && (
                    <>
                      <Divider className="" />

                      <div className=" flex flex-wrap items-center gap-1">
                        <p>Communities:</p>

                        {team[heroIndexToShow].communities?.map((community) => {
                          return (
                            <Chip
                              key={community}
                              color="default"
                              variant="bordered"
                              size="sm"
                              className="text-xs text-content2"
                            >
                              {community}
                            </Chip>
                          );
                        })}
                      </div>
                    </>
                  )}
                  {team[heroIndexToShow].socials && (
                    <>
                      <Divider className="" />
                      <div className=" flex flex-wrap gap-1 items-center">
                        {team[heroIndexToShow].socials?.map((social) => {
                          return (
                            <Link
                              key={social.link}
                              target="_blank"
                              href={social.link}
                              className="p-2 bg-content2/10 rounded-xl text-xl"
                            >
                              {social.type === "x" && (
                                <span className=" text-content2">
                                  <FaXTwitter />
                                </span>
                              )}
                              {social.type === "dc" && (
                                <span className=" text-indigo-500">
                                  <FaDiscord />
                                </span>
                              )}
                              {social.type === "fb" && (
                                <span className=" text-blue-500">
                                  <FaFacebookF />
                                </span>
                              )}
                              {social.type === "ig" && (
                                <span className=" text-pink-500 ">
                                  <FaInstagram />
                                </span>
                              )}
                              {social.type === "tt" && (
                                <span className=" text-fuchsia-500 ">
                                  <FaTiktok />
                                </span>
                              )}
                              {social.type === "yt" && (
                                <span className=" text-red-500">
                                  <FaYoutube />
                                </span>
                              )}
                              {social.type === "elixir" && (
                                <Image
                                  src={elixer}
                                  alt="elixir"
                                  width={20}
                                  height={20}
                                />
                              )}
                              {social.type === "rtk" && (
                                <Image
                                  src={rethinkable}
                                  alt="rethinkable"
                                  width={20}
                                  height={20}
                                />
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.p
            variants={item}
            className="mb-0 text-xs font-thin mt-auto text-warning text-center"
          >
            Powered by : Motion Cabin
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
