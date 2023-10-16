"use client";
import List from "@/app/components/AnimatedTags/List";
import Image from "next/image";
import UL_Grid from "@/app/components/Layouts/Scrollable_UL";
import HeroModal from "./HeroModal";
import Paragraph from "@/app/components/AnimatedTags/Paragraph";
import Scrollable from "@/app/components/Layouts/Scrollable";
import GlowingBorder from "@/app/components/Styles/GlowingBorder";
import teams from "@/public/images/team/teams.webp";
import { TeamData } from "./hero-data";
import React, { useState } from "react";
import { useThemeStore } from "@/store";
import Div from "@/app/components/AnimatedTags/Div";

export default function Page() {
  const theme = useThemeStore();
  const [showModal, setShowModal] = useState(false);
  const [heroIndexToShow, setHeroIndexToShow] = useState(0);
  const team = TeamData;

  return (
    <Scrollable>
      <Paragraph className="text-center">
        Meet the Founding heroes behind this epic journey
      </Paragraph>
      <div className="max-h-full h-full overflow-x-hidden overflow-y-auto pb-10 flex flex-col gap-3  m-auto">
        <div className="relative w-full  shrink-0 h-[250px] sm:h-[350px] xl:h-[450px] rounded-xl overflow-hidden glowing-border p-[2px]">
          <Image
            src={teams}
            alt="HeroeZ"
            className="object-cover object-center w-full h-full rounded-xl"
          />
          <div className="absolute top-0 left-0 bottom-0 right-0">
            <GlowingBorder />
          </div>
        </div>
        <ul className=" grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3">
          {team.map((hero, i) => {
            return (
              <List key={hero.name} className="aspect-square">
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
      </div>

      <HeroModal
        heroIndexToShow={heroIndexToShow}
        setShowModal={(state) => setShowModal(state)}
        showModal={showModal}
        theme={theme.mode}
      />
    </Scrollable>
  );
}
