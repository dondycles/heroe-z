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
      <div className=" flex flex-row gap-4 max-h-[300px] sm:max-h-[400px] md:max-h-[500px] h-full overflow-hidden group container p-4">
        <div className=" flex flex-row gap-4  ">
          {nfts.map((nft, i) => {
            const [showDetails, setShowDetails] = useState(false);
            return (
              <div
                key={i * i}
                className=" h-full w-auto aspect-square glowing-border p-1 bg-primary/20 rounded-xl relative overflow-hidden"
              >
                <Image
                  className="h-full w-auto aspect-square object-cover rounded-xl duration-100 "
                  src={nft.src}
                  alt={String(nft.src)}
                  placeholder="blur"
                />

                <div
                  className={`
                  absolute bottom-4 h-1/2 left-4 right-4 rounded-xl text-white flex duration-300 z-10 flex-col bg-black/50 backdrop-blur-[2px] backdrop-brightness-75 cursor-pointer overflow-hidden ${
                    !showDetails ? "max-h-[40px]" : "max-h-[400px]"
                  }`}
                >
                  <Button
                    onClick={() => setShowDetails((prev) => !prev)}
                    className="bg-transparent min-h-[40px] p-0"
                  >
                    <p className="text-sizing text-white drop-shadow-[0_1px_1px_#00000088] font-montserrat flex flex-row items-center justify-between w-full p-4">
                      Hero Name
                      <span
                        className={`${
                          showDetails ? "rotate-180" : "rotate-0"
                        } duration-500 text-white text-2xl`}
                      >
                        <MdOutlineKeyboardArrowUp />
                      </span>
                    </p>
                  </Button>
                  <Divider />
                  <div className="py-4 overflow-hidden ">
                    <div className="max-h-full overflow-auto rounded-xl px-4 ">
                      <p>
                        Skills: ipsum dolor sit amet consectetur adipisicing
                        elit. Tempora
                      </p>
                      <br />
                      <p>
                        Skills: ipsum dolor sit amet consectetur adipisicing
                        elit. Tempora
                      </p>
                      <br />

                      <p>
                        Skills: ipsum dolor sit amet consectetur adipisicing
                        elit. Tempora
                      </p>
                    </div>
                  </div>
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
