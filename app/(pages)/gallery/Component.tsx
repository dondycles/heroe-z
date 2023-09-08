"use client";
import { useAnimateStore } from "@/store";
import { container, item } from "@/transitions";
import { AnimatePresence, motion } from "framer-motion";
import { Card, CardFooter } from "@nextui-org/react";
import Image from "next/image";
export default function Component() {
  const animate = useAnimateStore();
  return (
    <AnimatePresence>
      {animate.mode && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          className=" flex flex-col gap-6 overflow-y-auto overflow-x-hidden h-screen max-h-[calc(100%-60px)] pb-6"
        >
          <motion.ul className="grid gap-y-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 lg:gap-x-6 gap-x-4 lg:gap-y-2  lg:col-span-3">
            {Array.from({ length: 100 }, (_: any, i: number) => {
              return (
                <motion.li variants={item} key={i}>
                  <Card
                    isFooterBlurred
                    radius="lg"
                    className="border-none aspect-square"
                  >
                    <Image
                      className="object-cover"
                      height={1200}
                      src={`https://picsum.photos/id/${i + i}/1200/1200`}
                      alt={String(i)}
                      width={1200}
                    />
                    <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                      <p className="text-tiny text-white/80">
                        <span>{i % 2 === 0 ? "Hero" : "Villain"}</span>
                        <span className="text-sm font-semibold"> #{i}</span>
                      </p>
                    </CardFooter>
                  </Card>
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
