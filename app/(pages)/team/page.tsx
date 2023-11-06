"use client";
import List from "@/app/components/AnimatedTags/List";
import Image from "next/image";
import UL_Grid from "@/app/components/Layouts/Scrollable_UL";
import HeroModal from "./HeroModal";
import Paragraph from "@/app/components/AnimatedTags/Paragraph";
import Scrollable from "@/app/components/Layouts/Scrollable";
import GlowingBorder from "@/app/components/Styles/GlowingBorder";
import teams from "@/public/images/team/teamss.webp";
import { TeamData } from "./hero-data";
import React, { useEffect, useState } from "react";
import { useThemeStore } from "@/store";
import Div from "@/app/components/AnimatedTags/Div";
import { useRouter } from "next/navigation";

export default function Page() {
  const theme = useThemeStore();
  const [showModal, setShowModal] = useState(false);
  const [heroIndexToShow, setHeroIndexToShow] = useState(0);
  const route = useRouter();
  const team = TeamData;

  useEffect(() => {
    return route.replace("/");
  });
  return <></>;
  // return (
  //   <Scrollable>
  //     <div className="max-h-full h-screen overflow-x-hidden overflow-y-auto flex flex-col gap-1 sm:gap-2  m-auto ">
  //       <div className="relative w-full h-full min-h-[300px] flex-1 rounded-md sm:rounded-xl overflow-hidden glowing-border p-[2px]">
  //         <Image
  //           src={teams}
  //           alt="HeroeZ"
  //           placeholder="blur"
  //           className="object-cover object-center w-full h-full rounded-md sm:rounded-xl"
  //         />
  //         <div className="absolute top-0 left-0 bottom-0 right-0">
  //           <GlowingBorder />
  //         </div>
  //       </div>
  //       <ul className=" grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-7 gap-1 sm:gap-2">
  //         {team.map((hero, i) => {
  //           return (
  //             <List key={hero.name} className="aspect-square">
  //               <div
  //                 onClick={() => {
  //                   setShowModal(true);
  //                   setHeroIndexToShow(i);
  //                 }}
  //                 className={`border-none glowing-border relative overflow-hidden max-w-[500px] w-full h-auto aspect-square p-[2px] rounded-md sm:rounded-xl bg-transparent sm:hover:scale-[99%] cursor-pointer duration-150
  //                   ${
  //                     theme.mode === "dark"
  //                       ? " drop-shadow-[0_0_4px_#ff444488]"
  //                       : " drop-shadow-[0_0_4px_#0099ff88]"
  //                   }
  //                   `}
  //               >
  //                 <GlowingBorder />
  //                 <Image
  //                   className="object-cover w-full h-full rounded-md sm:rounded-xl"
  //                   quality={100}
  //                   src={hero.img}
  //                   alt={hero.name}
  //                   priority
  //                 />
  //                 <div
  //                   className={`justify-center overflow-hidden text-center py-1 absolute rounded-xl bottom-2 left-2 right-2 shadow-small z-10 backdrop-brightness-[30%] `}
  //                 >
  //                   <p className=" text-primary font-montserrat">{hero.name}</p>
  //                 </div>
  //               </div>
  //             </List>
  //           );
  //         })}
  //       </ul>
  //     </div>
  //     <div className="flex flex-col w-full text-center ">
  //       <Paragraph className="text-primary font-black font-montserrat text-xl sm:text-3xl text-center">
  //         TEAM
  //       </Paragraph>
  //       <Paragraph className="text-center font-montserrat uppercase">
  //         Meet the Founding heroes behind this epic journey.
  //       </Paragraph>
  //     </div>
  //     <HeroModal
  //       heroIndexToShow={heroIndexToShow}
  //       setShowModal={(state) => setShowModal(state)}
  //       showModal={showModal}
  //       theme={theme.mode}
  //     />
  //   </Scrollable>
  // );
}
