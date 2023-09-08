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
          className="max-w-[500px] flex flex-col h-screen max-h-[calc(100%-60px)]"
        >
          <motion.p variants={item}>
            Meet the Founding heroes behind this epic journey.
          </motion.p>
          <motion.p variants={item} className="mb-0 mt-auto text-warning ">
            Powered by : Motion Cabin
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
