"use client";
import { useAnimateStore } from "@/store";
import { container, item } from "@/transitions";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import chatp1 from "@/public/chapt1.webp";
import chatp2 from "@/public/chapt2.webp";
import { useNavigationStore } from "@/store";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { Card, CardHeader, CardFooter, Button } from "@nextui-org/react";
export default function Component() {
  let novelParts = [
    {
      title: "TO AETHEREA / HAO YUA",
      desc: "",
      src: chatp1,
      link: "/web-novel/read?chapter=1",
    },
    {
      title: "THE NIGHT THAT STARS FELL",
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
          className="w-full flex flex-col gap-3 h-screen max-h-[calc(100%-60px)] overflow-y-auto "
        >
          <motion.p variants={item}>
            The plot centers on Alexiel Reidhart, a top-ranking hero of the
            society who is mysteriously summoned into the world of sword and
            magic. She investigates the cause of this strange phenomena and
            confronts impending threats of the new world.
          </motion.p>
          <ul className="flex-1 overflow-y-auto self-stretch flex flex-col gap-3  pb-3">
            {novelParts.map((part, i) => {
              return (
                <motion.li key={i} variants={item}>
                  <Card
                    isFooterBlurred
                    className="w-full h-[300px] col-span-12 sm:col-span-7 "
                  >
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                      <h4 className="text-white drop-shadow-[0_2px_2px_#000000aa] font-montserrat text-xl">
                        {part.title}
                      </h4>
                    </CardHeader>
                    <Image
                      alt={part.title}
                      className="z-0 w-full h-full object-cover"
                      width={1000}
                      height={500}
                      placeholder="blur"
                      src={part.src}
                    />
                    <CardFooter className="absolute bg-black/50 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                      <div className="flex flex-grow gap-2 items-center">
                        <Image
                          alt={part.title}
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
                            Chapter {i + 1}
                          </p>
                        </div>
                      </div>
                      <Button
                        onClick={() => {
                          navigation.setWillNavigateTo(part.link);
                        }}
                        className=" group btn-default text-primary px-6 w-fit sm:hover:translate-x-1 shadow-md bg-primary/10"
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
