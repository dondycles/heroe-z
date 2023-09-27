"use client";
import Image from "next/image";
import Paragraph from "@/app/components/AnimatedTags/Paragraph";
import Scrollable from "@/app/components/Layouts/Scrollable";

import { useState } from "react";
import GlowingBorder from "@/app/components/Styles/GlowingBorder";

export default function Page() {
  const [nfts, setNfts] = useState([
    {
      src: `/images/nfts/1.webp`,
    },
    {
      src: `/images/nfts/2.webp`,
    },
    {
      src: `/images/nfts/3.webp`,
    },
    {
      src: `/images/nfts/4.webp`,
    },
    {
      src: `/images/nfts/5.webp`,
    },
    {
      src: `/images/nfts/6.webp`,
    },
  ]);

  return (
    <Scrollable>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, velit
        fuga. Qui!
      </Paragraph>
      <div className=" flex flex-row gap-4 max-h-[300px] sm:max-h-[400px] md:max-h-[500px] h-full overflow-hidden group container p-4">
        <div className=" flex flex-row gap-4 con-partition">
          {nfts.map((nft, i) => {
            return (
              <div
                key={i}
                className=" h-full w-auto aspect-square glowing-border p-1 bg-primary/20 rounded-xl relative overflow-hidden"
              >
                <img
                  className="h-full w-auto aspect-square object-cover rounded-xl duration-100 "
                  src={nft.src}
                  alt={String(nft.src)}
                />
                <div className="absolute top-4 left-4 rounded-md bg-background/50 px-4 flex items-center justify-center">
                  <p className="text-sizing text-white drop-shadow-[0_1px_1px_#00000088]">
                    Hero Name
                  </p>
                </div>
                <div className="absolute top-0 bottom-0 left-0 right-0">
                  <GlowingBorder />
                </div>
              </div>
            );
          })}
        </div>
        <div className=" flex flex-row gap-4  con-partition">
          {nfts.map((nft, i) => {
            return (
              <div
                key={nft.src}
                className=" h-full w-auto aspect-square glowing-border p-1 bg-primary/20 rounded-xl relative overflow-hidden"
              >
                <img
                  className="h-full w-auto aspect-square object-cover rounded-xl duration-100 "
                  src={nft.src}
                  alt={String(nft.src)}
                />{" "}
                <div className="absolute top-4 left-4 rounded-md bg-background/50 px-4 flex items-center justify-center">
                  <p className="text-sizing text-white drop-shadow-[0_1px_1px_#00000088]">
                    Hero Name
                  </p>
                </div>
                <div className="absolute top-0 bottom-0 left-0 right-0">
                  <GlowingBorder />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Scrollable>
  );
}
