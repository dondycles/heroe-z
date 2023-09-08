"use client";
import { useAnimateStore } from "@/store";
import { container, item } from "@/transitions";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@nextui-org/link";
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
          className="w-full flex flex-col items-start justify-start gap-6 h-full max-h-[calc(100%-60px)] overflow-y-auto"
        >
          <motion.p variants={item}>
            Claiming of Hero license is not yet available. This feature will be
            unlocked in future events.
          </motion.p>
          <motion.p variants={item} className=" text-warning ">
            (Please check the{" "}
            <Link
              underline="always"
              href="/updates"
              className="text-primaryblue"
            >
              updates
            </Link>{" "}
            section for announcements, stay tune.)
          </motion.p>

          <motion.p variants={item}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, illo
            id nemo sint expedita dignissimos adipisci quas quod impedit commodi
            magni repudiandae accusamus nihil ut natus voluptatum quasi cumque
            rum unde est, exercitationem sapiente culpa, doloribus assumenda ex
            labore ea. Voluptatem aperiam et maiores delectus sit rerum ad
            corrupti. Repellendus repudiandae commodi nemo et dolores voluptates
            velit. Molestias eligendi minus provident inventore laborum? Vitae
            dignissimosrecusandae fugiat harum blanditiis explicabo illo ducimus
            sunt facilis. Quo, dolore.
          </motion.p>
          <motion.p variants={item}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, illo
            id nemo sint expedita dignissimos adipisci quas quod impedit commodi
            magni repudiandae accusamus nihil ut natus voluptatum quasi cumque
            rum unde est, exercitationem sapiente culpa, doloribus assumenda ex
            labore ea. Voluptatem aperiam et maiores delectus sit rerum ad
            corrupti. Repellendus repudiandae commodi nemo et dolores voluptates
            velit. Molestias eligendi minus provident inventore laborum? Vitae
            dignissimosrecusandae fugiat harum blanditiis explicabo illo ducimus
            sunt facilis. Quo, dolore.
          </motion.p>
          <motion.p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, illo
            id nemo sint expedita dignissimos adipisci quas quod impedit commodi
            magni repudiandae accusamus nihil ut natus voluptatum quasi cumque
            rum unde est, exercitationem sapiente culpa, doloribus assumenda ex
            labore ea. Voluptatem aperiam et maiores delectus sit rerum ad
            corrupti. Repellendus repudiandae commodi nemo et dolores voluptates
            velit. Molestias eligendi minus provident inventore laborum? Vitae
            dignissimosrecusandae fugiat harum blanditiis explicabo illo ducimus
            sunt facilis. Quo, dolore.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
