"use client";
import Paragraph from "@/app/components/AnimatedTags/Paragraph";
import Scrollable from "@/app/components/Layouts/Scrollable";
import { studioZImages } from "./studio-z-images";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { container, item } from "@/transitions";
import { useAnimateStore } from "@/store";
export default function Page() {
  const animate = useAnimateStore();
  return (
    <Scrollable>
      <div className="flex flex-row w-full h-full overflow-y-auto overflow-x-hidden gap-3">
        <div className="max-h-full h-full flex-1 min-w-[250px] overflow-auto">
          <Paragraph>
            Studio Z is an upcoming animation company that caters to Web2 & Web3
            clients fully backed by Motion Cabin, a leading creative agency in
            the Philippines. With a passion for storytelling and a commitment to
            pushing the boundaries of anime in the Web3 scene, Studio Z will
            establish itself as a powerhouse in the anime web3 scene. In
            in-house team has worked for several known brands and series such
            as; Marvel, Netflix etc., and Studio Z will bring a diverse range of
            captivating animations that will continue to captivate audiences
            worldwide. Studio Z's & Motion Cabin's commitment to excellence will
            shine through in every frame, redefining the anime in the blockchain
            space.
          </Paragraph>
        </div>
        <div className="hidden max-w-[47vw] w-screen sm:flex flex-col gap-2 overflow-auto scrollbar-hide">
          <div className="flex-1 flex justify-end flex-row gap-2 min-h-[150px] overflow-auto scrollbar-hide shrink-0 relative">
            <Image
              key={studioZImages[9].alt}
              src={studioZImages[9].src}
              alt={studioZImages[9].alt}
              style={{
                animationDelay: String(0.5 + "s"),
                transitionDelay: "0.5s",
                opacity: animate.mode ? 1 : 0,
              }}
              className="object-cover aspect-auto w-fit rounded-xl animate-float ease-in-out duration-300 "
            />

            {studioZImages.slice(0, 2).map((image, i) => {
              return (
                <Image
                  src={image.src}
                  alt={image.alt}
                  key={image.alt}
                  style={{
                    animationDelay: String(i / 2 + "s"),
                    transitionDelay: String(0.5 * (i + 1) + "s"),
                    opacity: animate.mode ? 1 : 0,
                  }}
                  className="object-cover aspect-auto w-fit rounded-xl animate-float ease-in-out duration-300 "
                />
              );
            })}
          </div>
          <div className="flex-1 flex flex-row gap-2 overflow-auto min-h-[150px]  scrollbar-hide">
            {studioZImages.slice(2, 5).map((image, i) => {
              return (
                <Image
                  src={image.src}
                  key={image.alt}
                  alt={image.alt}
                  style={{
                    animationDelay: String(i / 2 + 0.3 + "s"),
                    transitionDelay: String(i + "s"),
                    opacity: animate.mode ? 1 : 0,
                  }}
                  className=" object-cover aspect-auto w-fit rounded-xl animate-float ease-in-out duration-300 "
                />
              );
            })}
          </div>
          <div className="flex-1 flex  justify-end  flex-row gap-2 min-h-[150px]  overflow-auto scrollbar-hide">
            {studioZImages.slice(4, 7).map((image, i) => {
              return (
                <Image
                  src={image.src}
                  key={image.alt}
                  alt={image.alt}
                  style={{
                    animationDelay: String(i / 2 + 0.6 + "s"),
                    transitionDelay: String(i + "s"),
                    opacity: animate.mode ? 1 : 0,
                  }}
                  className=" object-cover aspect-auto w-fit rounded-xl animate-float ease-in-out duration-300 "
                />
              );
            })}
          </div>
          <div className="flex-1 flex flex-row gap-2 overflow-auto min-h-[150px]  scrollbar-hide">
            {studioZImages.slice(7, 10).map((image, i) => {
              return (
                <Image
                  src={image.src}
                  key={image.alt}
                  alt={image.alt}
                  style={{
                    animationDelay: String(i / 2 + 0.9 + "s"),
                    transitionDelay: String(i + "s"),
                    opacity: animate.mode ? 1 : 0,
                  }}
                  className=" object-cover aspect-auto w-fit rounded-xl animate-float ease-in-out duration-300 "
                />
              );
            })}
          </div>
        </div>
      </div>
    </Scrollable>
  );
}
