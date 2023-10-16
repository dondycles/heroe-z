"use client";
import List from "@/app/components/AnimatedTags/List";
import Image from "next/image";
import HeroModal from "./HeroModal";
import Paragraph from "@/app/components/AnimatedTags/Paragraph";
import Scrollable from "@/app/components/Layouts/Scrollable";
import GlowingBorder from "@/app/components/Styles/GlowingBorder";

import { TeamData } from "./hero-data";
import React, { useState } from "react";
import { useThemeStore } from "@/store";

export default function Page() {
  const theme = useThemeStore();
  const [showModal, setShowModal] = useState(false);
  const [heroIndexToShow, setHeroIndexToShow] = useState(0);
  const team = TeamData;

  return (
    <Scrollable>
      <Paragraph>Meet the Founding heroes behind this epic journey</Paragraph>
      <ul className=" flex gap-2 flex-wrap justify-center items-center max-h-full m-auto overflow-y-auto">
        {team.map((hero, i) => {
          return (
            <List key={hero.name} className="max-h-[300px] aspect-square">
              <div
                onClick={() => {
                  setShowModal(true);
                  setHeroIndexToShow(i);
                }}
                className={`border-none glowing-border relative overflow-hidden max-w-[500px] w-full h-auto aspect-square p-[2px] rounded-xl bg-transparent sm:hover:scale-[99%] cursor-pointer duration-150
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
                  <p className=" text-primary font-montserrat">{hero.name}</p>
                </div>
              </div>
            </List>
          );
        })}
      </ul>
      <HeroModal
        heroIndexToShow={heroIndexToShow}
        setShowModal={(state) => setShowModal(state)}
        showModal={showModal}
        theme={theme.mode}
      />
    </Scrollable>
  );
}
