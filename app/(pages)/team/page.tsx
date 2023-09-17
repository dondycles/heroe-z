"use client";
import List from "@/app/components/AnimatedTags/List";
import Image from "next/image";
import UL_Grid from "@/app/components/Layouts/Scrollable_UL";
import HeroModal from "./HeroModal";
import Paragraph from "@/app/components/AnimatedTags/Paragraph";
import Scrollable from "@/app/components/Layouts/Scrollable";
import GlowingBorder from "@/app/components/Styles/GlowingBorder";

import { TeamData } from "./hero-data";
import { useState } from "react";
import { useThemeStore } from "@/store";

export default function Page() {
  const theme = useThemeStore();
  const [showModal, setShowModal] = useState(false);
  const [heroIndexToShow, setHeroIndexToShow] = useState(0);
  const team = TeamData;

  return (
    <Scrollable>
      <Paragraph className="">
        Meet the Founding heroes behind this epic journey
      </Paragraph>
      <UL_Grid type="grid">
        {team.map((hero, i) => {
          return (
            <List key={hero.name} className="w-fit h-fit">
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
        <List
          key="motioncabin"
          className="mb-0 text-xs font-thin mt-auto text-warning text-center bg-black"
        >
          Powered by : Motion Cabin
        </List>
      </UL_Grid>
      <HeroModal
        heroIndexToShow={heroIndexToShow}
        setShowModal={(state) => setShowModal(state)}
        showModal={showModal}
        theme={theme.mode}
      />
    </Scrollable>
  );
}
