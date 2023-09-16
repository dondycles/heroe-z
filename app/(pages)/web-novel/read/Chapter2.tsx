"use client";
import { useAnimateStore } from "@/store";
import { container, item } from "@/transitions";
import { AnimatePresence, motion } from "framer-motion";
export default function Chapter2() {
  const animate = useAnimateStore();
  return (
    <AnimatePresence>
      <motion.h1
        initial={{ x: 10 }}
        animate={{ x: 0 }}
        exit={{ x: 10 }}
        className="mb-3"
      >
        CHAPTER <span className="text-primary">2</span>
      </motion.h1>
      {animate.mode && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          className=" flex flex-col gap-3 overflow-y-auto overflow-x-hidden h-screen max-h-full"
        >
          <motion.p variants={item}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. cumque,
            aut nostrum ullam quam suscipit itaque facilis quae ab assumenda.
            Eos modi vel cum, numquam expedita asperiores! ! Sunt illo nemo sit
            perferendis, eius ex iste corrupti. Consequuntur incidunt nihil ab
            quam.
          </motion.p>

          <motion.p variants={item}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. cumque,
            aut nostrum ullam quam suscipit itaque facilis quae ab assumenda.
            Eos modi vel cum, numquam expedita asperiores! ! Sunt illo nemo sit
            perferendis, eius ex iste corrupti. Consequuntur incidunt nihil ab
            quam.
          </motion.p>
          <motion.p variants={item}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. cumque,
            aut nostrum ullam quam suscipit itaque facilis quae ab assumenda.
            Eos modi vel cum, numquam expedita asperiores! ! Sunt illo nemo sit
            perferendis, eius ex iste corrupti. Consequuntur incidunt nihil ab
            quam.
          </motion.p>

          <motion.p variants={item}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. cumque,
            aut nostrum ullam quam suscipit itaque facilis quae ab assumenda.
            Eos modi vel cum, numquam expedita asperiores! ! Sunt illo nemo sit
            perferendis, eius ex iste corrupti. Consequuntur incidunt nihil ab
            quam.
          </motion.p>
          <motion.p variants={item}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. cumque,
            aut nostrum ullam quam suscipit itaque facilis quae ab assumenda.
            Eos modi vel cum, numquam expedita asperiores! ! Sunt illo nemo sit
            perferendis, eius ex iste corrupti. Consequuntur incidunt nihil ab
            quam.
          </motion.p>

          <motion.p variants={item}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. cumque,
            aut nostrum ullam quam suscipit itaque facilis quae ab assumenda.
            Eos modi vel cum, numquam expedita asperiores! ! Sunt illo nemo sit
            perferendis, eius ex iste corrupti. Consequuntur incidunt nihil ab
            quam.
          </motion.p>
          <motion.p variants={item}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. cumque,
            aut nostrum ullam quam suscipit itaque facilis quae ab assumenda.
            Eos modi vel cum, numquam expedita asperiores! ! Sunt illo nemo sit
            perferendis, eius ex iste corrupti. Consequuntur incidunt nihil ab
            quam.
          </motion.p>

          <motion.p variants={item}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. cumque,
            aut nostrum ullam quam suscipit itaque facilis quae ab assumenda.
            Eos modi vel cum, numquam expedita asperiores! ! Sunt illo nemo sit
            perferendis, eius ex iste corrupti. Consequuntur incidunt nihil ab
            quam.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
