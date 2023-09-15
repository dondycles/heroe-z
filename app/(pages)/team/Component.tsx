"use client";
import GlowingBorder from "@/main-components/Styles/GlowingBorder";
import { useAnimateStore, useThemeStore } from "@/store";
import { container, item } from "@/transitions";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Kazma from "@/public/team/Kazma.webp";
import JovzkyAnimation from "@/public/team/JovzkyAnimation.webp";
import EscoCobarseth from "@/public/team/EscoCobarseth.webp";
import xJudaseth from "@/public/team/xJudaseth.webp";
import Fonso from "@/public/team/Fonso.webp";
import { useState } from "react";
import { Chip } from "@nextui-org/react";
export default function Component() {
  const theme = useThemeStore();
  const animate = useAnimateStore();
  const [showModal, setShowModal] = useState(false);
  const [heroIndexToShow, setHeroIndexToShow] = useState(0);
  const team = [
    {
      name: "Kazma",
      moto: "Always believe.",
      roles: ["HEROEZ!", "Creative Director", "Founder"],
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
        "Collaborations/Partnerships Manager",
        "Head Strategist",
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
      roles: ["HEROEZ!", "Collaborations/Partnerships Manager", "Strategist"],
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
      roles: ["HEROEZ!", "Collaborations/Partnerships Manager", "Strategist"],
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
  return (
    <AnimatePresence>
      {animate.mode && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          className=" flex flex-col gap-6 h-screen max-h-[calc(100%-60px)]"
        >
          <motion.p variants={item}>
            Meet the Founding heroes behind this epic journey.
          </motion.p>

          <motion.div
            variants={item}
            className=" max-h-full overflow-auto w-full  p-6 rounded-xl
            
            "
          >
            <motion.ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3    ">
              {team.map((hero, i) => {
                return (
                  <motion.li
                    onClick={() => {
                      setShowModal(true);
                      setHeroIndexToShow(i);
                    }}
                    variants={item}
                    key={hero.name}
                    className=""
                  >
                    <div
                      className={`border-none glowing-border relative overflow-hidden max-w-[500px] w-full h-auto aspect-square p-[2px] rounded-xl bg-primary/30
                    
                    ${
                      theme.mode === "dark"
                        ? " drop-shadow-[0_0_10px_#ff444488]"
                        : " drop-shadow-[0_0_10px_#0099ff88]"
                    }
                    `}
                    >
                      <GlowingBorder />
                      <Image
                        className="object-cover w-full h-full rounded-xl"
                        quality={100}
                        src={hero.img}
                        alt={hero.name}
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
          <AnimatePresence>
            {showModal && (
              <motion.div
                key={"heromodal"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowModal(false)}
                className="fixed flex items-center justify-center top-0 left-0 w-[100dvw] h-[100dvh] backdrop-blur-sm backdrop-brightness-50 p-6"
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className=" w-full max-w-[400px] h-fit glowing-border overflow-hidden relative  p-6 rounded-xl gap-3 flex flex-col"
                >
                  <Image
                    src={team[heroIndexToShow].img}
                    alt={team[heroIndexToShow].name}
                    className="rounded-xl w-full h-auto object-cover"
                  />
                  <p className="font-montserrat text-primary text-xl">
                    {team[heroIndexToShow].name}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {team[heroIndexToShow].roles.map((role) => {
                      return (
                        <Chip
                          color="primary"
                          variant="dot"
                          size="sm"
                          className="text-content2 text-xs border-primary"
                        >
                          {role}
                        </Chip>
                      );
                    })}
                  </div>
                  {team[heroIndexToShow].moto && (
                    <p className=" text-warning italic">
                      "{team[heroIndexToShow].moto}"
                    </p>
                  )}

                  <p className=" text-content2 text-sm">
                    {team[heroIndexToShow].description}
                  </p>
                  {team[heroIndexToShow].socials && (
                    <footer>
                      {team[heroIndexToShow].socials?.map((social) => {
                        return <p>{social.type}</p>;
                      })}
                    </footer>
                  )}

                  <GlowingBorder />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.p
            variants={item}
            className="mb-0 mt-auto text-warning text-center"
          >
            Powered by : Motion Cabin
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
