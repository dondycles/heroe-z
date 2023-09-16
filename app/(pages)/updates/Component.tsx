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
              This page is intended for announcements that revolves around
              HEROEZ!
            </motion.p>
            <motion.p variants={item} className=" text-warning">
              We will let everyone know once this page is up and running.{" "}
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
