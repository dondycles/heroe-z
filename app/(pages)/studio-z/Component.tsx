"use client";
import { useAnimateStore } from "@/store";
import { container, item } from "@/transitions";
import { AnimatePresence, motion } from "framer-motion";
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
          className="w-full flex flex-col gap-3 h-screen max-h-[calc(100%-60px)]"
        >
          <motion.div className="max-w-[500px] flex flex-col gap-3">
            <motion.p variants={item}>
              Studio Z is the upcoming animation studio that will give
              benefits/value to our dearly beloved HEROEZ! things such as
              merchandise production, shared generated profit to the community
              and more things to give back to our community.
            </motion.p>
            <motion.p variants={item}>
              Studio Z forte is all about animation industry, with the help of
              our partnered VC and decades of skills and experience of our team,
              we are confident that we can give value to our community.
            </motion.p>
            <motion.p variants={item} className=" text-warning">
              All for one. One for All.
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
