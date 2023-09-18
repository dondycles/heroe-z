"use client";

import List from "@/app/components/AnimatedTags/List";
import Image from "next/image";
import Paragraph from "@/app/components/AnimatedTags/Paragraph";
import Scrollable from "@/app/components/Layouts/Scrollable";
import Scrollable_UL from "@/app/components/Layouts/Scrollable_UL";

import { NovelData } from "./novel-data";
import { useNavigationStore } from "@/store";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { Card, CardHeader, CardFooter, Button } from "@nextui-org/react";

export default function Component() {
  let novelParts = NovelData;
  const navigation = useNavigationStore();
  return (
    <Scrollable>
      <Paragraph>
        The plot centers on Alexiel Reidhart, a top-ranking hero of the society
        who is mysteriously summoned into the world of sword and magic. She
        investigates the cause of this strange phenomena and confronts impending
        threats of the new world.
      </Paragraph>
      <Scrollable_UL type="flex">
        {novelParts.map((part, i) => {
          return (
            <List key={i}>
              <Card
                isFooterBlurred
                className="w-full h-[300px] col-span-12 sm:col-span-7 "
              >
                <CardHeader className="absolute z-10 flex-col items-start top-1">
                  <h4 className="text-white drop-shadow-[0_2px_2px_#000000aa] font-montserrat text-xl">
                    {part.title}
                  </h4>
                </CardHeader>
                <Image
                  alt={part.title}
                  className="z-0 object-cover w-full h-full"
                  width={1000}
                  height={500}
                  placeholder="blur"
                  src={part.src}
                />
                <CardFooter className="absolute bottom-0 z-10 bg-black/50 border-t-1 border-default-600 dark:border-default-100">
                  <div className="flex items-center flex-grow gap-2">
                    <Image
                      alt={part.title}
                      className="w-10 h-10 bg-black rounded-full"
                      width={256}
                      height={256}
                      src="/images/icons/logo256-dark.png"
                    />
                    <div className="flex flex-col">
                      <p className="text-tiny text-white/60">{part.title}</p>
                      <p className="text-tiny text-white/60">Chapter {i + 1}</p>
                    </div>
                  </div>
                  <Button
                    onClick={() => {
                      navigation.setWillNavigateTo(part.link);
                    }}
                    className="px-6 shadow-md group btn-default text-primary w-fit sm:hover:translate-x-1 bg-primary/10"
                  >
                    <p className="flex items-center justify-center w-full gap-1 text-xs">
                      <span className="duration-150 sm:group-hover:-translate-x-1">
                        READ
                      </span>
                      <span className="duration-150 sm:group-hover:text-lg">
                        <TbPlayerTrackNextFilled />
                      </span>
                    </p>
                  </Button>
                </CardFooter>
              </Card>
            </List>
          );
        })}
      </Scrollable_UL>
    </Scrollable>
  );
}
