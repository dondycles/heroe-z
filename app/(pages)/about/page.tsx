"use client";
import Paragraph from "@/app/components/AnimatedTags/Paragraph";
import Scrollable from "@/app/components/Layouts/Scrollable";
import { Divider, Link } from "@nextui-org/react";
import Image from "next/image";
import dragon from "@/public/images/about/dragon.webp";
import GlowingBorder from "@/app/components/Styles/GlowingBorder";
import motioncabinlight from "@/public/images/about/motion-cabin-light.svg";
import motioncabindark from "@/public/images/about/motion-cabin-dark.svg";
import logodark from "@/public/images/icons/logo256-dark.png";
import logolight from "@/public/images/icons/logo256.png";
import { ImCross } from "react-icons/im";
import { useThemeStore } from "@/store";
import Div from "@/app/components/AnimatedTags/Div";
import { partners } from "./partners-data";
export default function Page() {
  const theme = useThemeStore();
  return (
    <Scrollable>
      <Paragraph className=" font-bold">
        HEROEZ! / ROKU JIGEN DE NO HEROES / HEROES IN 6th DIMENSION
      </Paragraph>
      <div className=" text-center max-h-full pb-10 overflow-y-auto overflow-x-hidden flex flex-col gap-3">
        <div className="relative w-full  shrink-0 h-[450px] rounded-md sm:rounded-xl overflow-hidden glowing-border p-[2px]">
          <Image
            src={dragon}
            alt="HeroeZ"
            placeholder="blur"
            className="object-cover object-center w-full h-full rounded-md sm:rounded-xl"
          />
          <div className="absolute top-0 left-0 bottom-0 right-0">
            <GlowingBorder />
          </div>
        </div>
        <Paragraph>
          Developed by Studio Z, Heroez is an anime brand developing vast and
          wondeful stories that touches our physical and digital hearts. Heroez
          is an anime collection of 3333 characters designed by Kazma!
        </Paragraph>
        <Paragraph>
          An animator/illustrator with decades of expertise in the animation
          industry.
        </Paragraph>

        <Paragraph>
          「 Kazma! has worked for a variety of companies and series, including
          but not limited to MARVEL ANIMATION, HITMONKEY (MARVEL), Rise of the
          Teenage Mutant Ninja Turtles (NETFLIX), DORA THE EXPLORER, and many
          others. 」
        </Paragraph>

        <div className="w-full flex flex-wrap justify-center gap-4 items-center  rounded-xl">
          <Div>
            <Image
              className="h-20 sm:h-40 w-fit aspect-square"
              src={theme.mode === "dark" ? logodark : logolight}
              alt="Motion Cabin"
            />
          </Div>

          <Div className="text-primary text-2xl">
            <ImCross />
          </Div>
          <Div>
            <Image
              className="h-20 sm:h-40 w-fit aspect-square"
              src={theme.mode === "light" ? motioncabindark : motioncabinlight}
              alt="Motion Cabin"
            />
          </Div>
        </div>
        <Paragraph>
          HEROEZ! & Studio Z has the full support of our partner Motion Cabin, a
          prominent creative agency in the Philippines and the first choice for
          many clients. Motion Cabin has signed agreements with the Philippine
          Retailers Association, AyalaLand, Speed Queen, Treston International
          College, the Ecosystems Research and Development Bureau, and other
          major corporations.
        </Paragraph>
        <Paragraph>
          Motion Cabin will facilitate any businesses that will be established
          around the HEROEZ ecosystem! making sure we give the greatest services
          for our people.
        </Paragraph>
        <Paragraph>
          You may learn more about Motion Cabin by visiting their website.{" "}
          <Link color="primary" href="https://motioncabin.com/" target="_blank">
            https://motioncabin.com/
          </Link>
        </Paragraph>
        <Divider />
        <Div className="w-full flex flex-col gap-2 bg-primary/5 rounded-xl">
          <Paragraph className="font-montserrat mt-2 text-primary">
            MOTION CABIN PARTNERS
          </Paragraph>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2">
            {partners.map((partner) => {
              return (
                <Image
                  className={`m-auto h-auto w-full max-w-[136px] object-cover ${
                    theme.mode === "light" && "invert"
                  } aspect-square p-6`}
                  alt={partner.alt}
                  src={partner.src}
                />
              );
            })}
          </div>
        </Div>
      </div>
    </Scrollable>
  );
}
