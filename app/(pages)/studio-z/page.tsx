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
      <div className="flex flex-col-reverse w-full h-full overflow-y-auto overflow-x-hidden gap-3">
        <div className="overflow-auto pb-10 text-center flex flex-col uppercase">
          <h1 className="text-xl sm:text-3xl ">
            STUDIO <span className=" text-primary ">Z</span>{" "}
          </h1>
          <Paragraph>
            Studio Z is an upcoming animation company that caters to Web2 & Web3
            clients fully backed by Motion Cabin, a leading creative agency in
            the Philippines.
          </Paragraph>
          <Paragraph>
            With a passion for storytelling and a commitment to pushing the
            boundaries of anime in the Web3, Studio Z will establish itself as a
            powerhouse in the anime web3 scene.
          </Paragraph>
          <Paragraph>
            The team has worked for several known brands and series such as;
            Marvel, Netflix etc., and Studio Z will bring a diverse range of
            captivating animations that will continue to captivate audiences
            worldwide.
          </Paragraph>
          <Paragraph>
            Studio Z's & Motion Cabin's commitment to excellence will shine
            through in every frame, redefining the anime in the blockchain
            space.
          </Paragraph>
        </div>
        <div className="flex-1 w-full grid grid-rows-4 gap-2 overflow-auto scrollbar-hide rounded-xl">
          <div className="flex-1 flex justify-start flex-row gap-2  overflow-auto scrollbar-hide shrink-0 relative">
            {studioZImages.map((image, i) => {
              return (
                <Image
                  src={image.src}
                  alt={image.alt}
                  key={image.alt}
                  style={{
                    animationDelay: String(i / 2 + "s"),
                  }}
                  className={`object-cover w-fit rounded-xl animate-float ease-in-out duration-300 ${
                    i % 2 === 0 ? "aspect-square" : "aspect-auto"
                  }`}
                />
              );
            })}
          </div>
          <div className="flex-1 flex flex-row gap-2  overflow-auto scrollbar-hide">
            {studioZImages.map((image, i) => {
              return (
                <Image
                  src={studioZImages[studioZImages.length - i - 1].src}
                  key={studioZImages[studioZImages.length - i - 1].alt}
                  alt={studioZImages[studioZImages.length - i - 1].alt}
                  style={{
                    animationDelay: String(i / 2 + 0.3 + "s"),
                  }}
                  className={`object-cover w-fit rounded-xl animate-float ease-in-out duration-300 ${
                    i % 2 === 0 ? "aspect-square" : "aspect-auto"
                  }`}
                />
              );
            })}
          </div>
          <div className="flex-1 flex  justify-end  flex-row gap-2   overflow-auto scrollbar-hide">
            {studioZImages.map((image, i) => {
              return (
                <Image
                  src={image.src}
                  alt={image.alt}
                  key={image.alt}
                  style={{
                    animationDelay: String(i / 2 + 0.6 + "s"),
                  }}
                  className={`object-cover w-fit rounded-xl animate-float ease-in-out duration-300 ${
                    i % 2 === 0 ? "aspect-square" : "aspect-auto"
                  }`}
                />
              );
            })}
          </div>
          <div className="flex-1 flex flex-row gap-2  justify-start overflow-auto scrollbar-hide">
            {studioZImages.map((image, i) => {
              return (
                <Image
                  src={studioZImages[studioZImages.length - i - 1].src}
                  key={studioZImages[studioZImages.length - i - 1].alt}
                  alt={studioZImages[studioZImages.length - i - 1].alt}
                  style={{
                    animationDelay: String(i / 2 + 0.9 + "s"),
                  }}
                  className={`object-cover w-fit rounded-xl animate-float ease-in-out duration-300 ${
                    i % 2 === 0 ? "aspect-square" : "aspect-auto"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Scrollable>
  );
}
