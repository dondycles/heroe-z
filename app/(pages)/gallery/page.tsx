"use client";
import Image from "next/image";
import Paragraph from "@/app/components/AnimatedTags/Paragraph";
import Scrollable from "@/app/components/Layouts/Scrollable";

import { MdOutlineKeyboardArrowUp } from "react-icons/md";

import { useState } from "react";
import GlowingBorder from "@/app/components/Styles/GlowingBorder";
import { Button, Divider } from "@nextui-org/react";
import nft1 from "@/public/images/nfts/1.webp";
import nft2 from "@/public/images/nfts/2.webp";
import nft3 from "@/public/images/nfts/3.webp";
import nft4 from "@/public/images/nfts/4.webp";
import nft5 from "@/public/images/nfts/5.webp";
import nft6 from "@/public/images/nfts/6.webp";
import HeroCard from "./Card";

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
  ];

  return (
    <Scrollable>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, velit
        fuga. Qui!
      </Paragraph>
      <div className="w-full h-2/3 grid grid-rows-2 gap-4 group ">
        <div className=" flex flex-row gap-4  h-full overflow-hidden group slider rounded-xl">
          <div className=" flex flex-row gap-4 con-partition ">
            {nfts.map((nft, i) => {
              const [showDetails, setShowDetails] = useState(false);
              return <HeroCard nft={nft} i={i} key={"a" + i} />;
            })}
          </div>
          <div className=" flex flex-row gap-4 con-partition">
            {nfts.map((nft, i) => {
              const [showDetails, setShowDetails] = useState(false);
              return <HeroCard nft={nft} i={i} key={"b" + i} />;
            })}
          </div>
        </div>
        <div className=" flex flex-row gap-4  h-full overflow-hidden group slider rounded-xl">
          <div className=" flex flex-row gap-4 con-partition-reverse">
            {nfts.map((nft, i) => {
              const [showDetails, setShowDetails] = useState(false);
              return <HeroCard nft={nft} i={i} key={"c" + i} />;
            })}
          </div>
          <div className=" flex flex-row gap-4 con-partition-reverse">
            {nfts.map((nft, i) => {
              const [showDetails, setShowDetails] = useState(false);
              return <HeroCard nft={nft} i={i} key={"d" + i} />;
            })}
          </div>
        </div>
      </div>
    </Scrollable>
  );
}
