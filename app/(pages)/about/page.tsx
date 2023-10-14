"use client";
import Paragraph from "@/app/components/AnimatedTags/Paragraph";
import Scrollable from "@/app/components/Layouts/Scrollable";
import { Link } from "@nextui-org/react";
import Image from "next/image";
import dragon from "@/public/images/about/dragon.webp";

export default function Page() {
  return (
    <Scrollable>
      <Paragraph className="text-primary font-bold">
        HEROEZ! / ROKU JIGEN DE NO HEROES / HEROES IN 6th DIMENSION
      </Paragraph>
      <div className="max-h-full overflow-y-auto overflow-x-hidden flex flex-col gap-3">
        <div className="relative w-full h-[450px] rounded-xl overflow-hidden">
          <Image src={dragon} alt="HeroeZ" objectFit="contain" />
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
        <Paragraph>
          HEROEZ! & Studio Z has the full support of our partner Motioncabin, a
          prominent creative agency in the Philippines and the first choice for
          many clients. Motioncabin has signed agreements with the Philippine
          Retailers Association, AyalaLand, Speed Queen, Treston International
          College, the Ecosystems Research and Development Bureau, and other
          major corporations.
        </Paragraph>
        <Paragraph>
          Motioncabin will facilitate any businesses that will be established
          around the HEROEZ ecosystem! making sure we give the greatest services
          for our people.
        </Paragraph>
        <Paragraph>
          You may learn more about Motioncabin by visiting their website.{" "}
          <Link color="primary" href="https://motioncabin.com/" target="_blank">
            https://motioncabin.com/
          </Link>
        </Paragraph>
      </div>
    </Scrollable>
  );
}
