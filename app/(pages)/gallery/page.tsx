"use client";
import Image from "next/image";
import Paragraph from "@/app/components/AnimatedTags/Paragraph";
import Scrollable from "@/app/components/Layouts/Scrollable";

import { MdOutlineKeyboardArrowUp } from "react-icons/md";

import React, { useState } from "react";
import GlowingBorder from "@/app/components/Styles/GlowingBorder";
import { Button, Divider } from "@nextui-org/react";
import nft1 from "@/public/images/nfts/1.webp";
import nft2 from "@/public/images/nfts/2.webp";
import nft3 from "@/public/images/nfts/3.webp";
import nft4 from "@/public/images/nfts/4.webp";
import nft5 from "@/public/images/nfts/5.webp";
import nft6 from "@/public/images/nfts/6.webp";
import nft7 from "@/public/images/nfts/7.webp";
import nft8 from "@/public/images/nfts/8.webp";
import nft9 from "@/public/images/nfts/9.webp";
import nft10 from "@/public/images/nfts/10.webp";
import nft11 from "@/public/images/nfts/11.webp";
import HeroCard from "@/app/components/ui/HeroCard";

export default function Page() {
  const nfts = [
    {
      src: nft1,
    },
    {
      src: nft2,
    },
    {
      src: nft3,
    },
    {
      src: nft4,
    },
    {
      src: nft5,
    },
    {
      src: nft6,
    },
    {
      src: nft7,
    },
    {
      src: nft8,
    },
    {
      src: nft9,
    },
    {
      src: nft10,
    },
    {
      src: nft11,
    },
  ];

  return (
    <Scrollable>
      <div className="w-full h-full grid grid-rows-2 gap-1 sm:gap-4  group ">
        <div className=" flex flex-row gap-1 sm:gap-4   h-full overflow-hidden group slider">
          <div className=" flex flex-row gap-1 sm:gap-4 con-partition ">
            {nfts.map((nft, i) => {
              return (
                <React.Fragment key={"a" + i}>
                  <HeroCard nft={nft} />
                </React.Fragment>
              );
            })}
          </div>
          <div className=" flex flex-row gap-1 sm:gap-4  con-partition">
            {nfts.map((nft, i) => {
              return (
                <React.Fragment key={"b" + i}>
                  <HeroCard nft={nft} />
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <div className=" flex flex-row gap-1 sm:gap-4   h-full overflow-hidden group slider ">
          <div className=" flex flex-row gap-1 sm:gap-4  con-partition-reverse">
            {nfts.map((nft, i) => {
              return (
                <React.Fragment key={"c" + i}>
                  <HeroCard nft={nft} />
                </React.Fragment>
              );
            })}
          </div>
          <div className=" flex flex-row gap-1 sm:gap-4  con-partition-reverse">
            {nfts.map((nft, i) => {
              return (
                <React.Fragment key={"d" + i}>
                  <HeroCard nft={nft} />
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col w-full h-full pb-10 text-center">
          <Paragraph className=" text-xl sm:text-3xl font-montserrat ">
            MEET THE GREATES HEROES, <span className=" text-primary">YOU.</span>
          </Paragraph>
          <Paragraph>
            BE THE HERO YOU NEED. UNLEASH YOUR INNER HERO. WE'RE ONE FOR ALL
            TOGETHER AND ONE FOR ALL FOREVER.
          </Paragraph>
          <Paragraph>
            <span className="text-primary font-montserrat">3333</span> HEROES
            CAME FROM DIFFERENT WORLDS BUT ONE MISSION. TO PROTECT HUMANITY FROM
            GREAT DESTRUCTION. A CAREFULLY CURATED COLLECTION BY{" "}
            <span className=" font-montserrat">STUDIO</span>{" "}
            <span className="text-primary font-montserrat">Z</span>.
          </Paragraph>
        </div>
      </div>
    </Scrollable>
  );
}
