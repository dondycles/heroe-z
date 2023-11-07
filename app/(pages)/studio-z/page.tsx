"use client";
import Paragraph from "@/app/components/AnimatedTags/Paragraph";
import Scrollable from "@/app/components/Layouts/Scrollable";
import { studioZImages } from "./studio-z-images";
import ImageTile from "@/app/components/ui/ImageTile";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Page() {
  const route = useRouter();
  useEffect(() => {
    return route.replace("/");
  });
  return (
    <Scrollable>
      <div className="flex flex-col-reverse w-full h-full overflow-y-auto overflow-x-hidden gap-3">
        <div className="overflow-auto pb-10 text-center flex flex-col uppercase ">
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
        <div className="flex-1 w-full grid grid-rows-3 gap-1 sm:gap-2 overflow-auto scrollbar-hide rounded-xl">
          <div className="flex-1 flex justify-start flex-row gap-1 sm:gap-2  overflow-auto scrollbar-hide shrink-0 relative">
            {studioZImages.map((image, i) => {
              return (
                <ImageTile
                  source={image.src}
                  alt={image.alt}
                  key={image.alt + 1}
                  i={i}
                  delay={2}
                />
              );
            })}
          </div>
          <div className="flex-1 flex flex-row gap-1 sm:gap-2 justify-center  overflow-auto scrollbar-hide">
            {studioZImages.map((image, i) => {
              return (
                <ImageTile
                  source={image.src}
                  alt={image.alt}
                  key={image.alt + 2}
                  i={i}
                  delay={2.5}
                />
              );
            })}
          </div>
          <div className="flex-1 flex  justify-end  flex-row gap-1 sm:gap-2   overflow-auto scrollbar-hide">
            {studioZImages.map((image, i) => {
              return (
                <ImageTile
                  source={image.src}
                  alt={image.alt}
                  key={image.alt + 3}
                  i={i}
                  delay={3}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Scrollable>
  );
}
