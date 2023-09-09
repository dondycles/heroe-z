"use client";
import { useAnimateStore } from "@/store";
import { container, item } from "@/transitions";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import chatp1 from "@/public/chapt1.webp";
import chatp2 from "@/public/chapt2.webp";
import { useNavigationStore } from "@/store";
import {
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
export default function Component() {
  let novelParts = [
    {
      title: "Chapter 1",
      desc: "",
      src: chatp1,
      link: "/web-novel/read?chapter=1",
    },
    {
      title: "Chapter 2",
      desc: "",
      src: chatp2,
      link: "/web-novel/read?chapter=2",
    },
  ];
  const animate = useAnimateStore();
  const navigation = useNavigationStore();
  return (
    <AnimatePresence>
      {animate.mode && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          className="w-full flex flex-col gap-6 h-screen max-h-[calc(100%-60px)] overflow-y-auto "
        >
          <motion.h2 variants={item}>
            The plot centers on Alexiel Reidhart, a top-ranking hero of the
            society who is mysteriously summoned into the world of sword and
            magic. She investigates the cause of this strange phenomena and
            confronts impending threats of the new world.
          </motion.h2>
          <ul className="flex-1 overflow-y-auto self-stretch flex flex-col gap-6  pb-6">
            {novelParts.map((part, i) => {
              return (
                <motion.li key={i} variants={item}>
                  <Card
                    isFooterBlurred
                    className="w-full h-[300px] col-span-12 sm:col-span-7 "
                  >
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                      <h4 className="text-white/90 font-medium text-xl">
                        Chapter Title
                      </h4>
                    </CardHeader>
                    <Image
                      alt="Relaxing app background"
                      className="z-0 w-full h-full object-cover"
                      width={1000}
                      height={500}
                      src={part.src}
                    />
                    <CardFooter className="absolute bg-black/50 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                      <div className="flex flex-grow gap-2 items-center">
                        <Image
                          alt="Breathing app icon"
                          className="rounded-full w-10 h-10 bg-black"
                          width={256}
                          height={256}
                          src="/logo256-dark.png"
                        />
                        <div className="flex flex-col">
                          <p className="text-tiny text-white/60">
                            {part.title}
                          </p>
                          <p className="text-tiny text-white/60">
                            Chapter Title
                          </p>
                        </div>
                      </div>
                      <Button
                        onClick={() => {
                          navigation.setWillNavigateTo(part.link);
                        }}
                        className=" group btn-default text-primaryblue px-6 w-fit sm:hover:translate-x-1 shadow-md bg-primaryblue/10"
                      >
                        <p className="flex w-full items-center justify-center text-xs gap-1">
                          <span className=" sm:group-hover:-translate-x-1 duration-150">
                            READ
                          </span>
                          <span className="sm:group-hover:text-lg duration-150">
                            <TbPlayerTrackNextFilled />
                          </span>
                        </p>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
