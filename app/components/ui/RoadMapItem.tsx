import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GlowingBorder from "../Styles/GlowingBorder";
import { roadMapData } from "@/app/(pages)/road-map/road-map-data";
import List from "../AnimatedTags/List";
import { container } from "@/transitions";
export default function RoadMapItem({ index }: { index: any }) {
  const [showMe, setShowMe] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => {
        setShowMe((prev) => !prev);
      }}
      initial={{ minHeight: "100px" }}
      animate={{
        minHeight: showMe ? "200px" : "100px",
      }}
      exit={{ minHeight: "100px" }}
      transition={{ type: "spring" }}
      className={`w-full rounded-xl bg-primary/5 p-[2px] cursor-pointer relative  glowing-border overflow-hidden `}
    >
      <motion.div
        layout
        className="w-full h-full  rounded-lg bg-background/70 relative p-2"
      >
        <AnimatePresence>
          {!showMe && (
            <motion.p
              layout
              key={"phase" + index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring" }}
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center font-montserrat text-3xl uppercase text-primary"
            >
              Phase {index}
            </motion.p>
          )}
        </AnimatePresence>

        <AnimatePresence mode="popLayout">
          <motion.ul
            key={"description" + index + showMe}
            className={`flex flex-col gap-2 duration-300 list-decimal list-inside ${
              showMe ? "h-fit" : "h-0 opacity-0"
            }`}
          >
            {roadMapData.map((data: any) =>
              data[index].map((data: any, i: number) => {
                return (
                  <motion.li
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{
                      delay: i / 20,
                      type: "spring",
                      duration: 0.5,
                    }}
                    key={data}
                    layout
                  >
                    {data}
                  </motion.li>
                );
              })
            )}
          </motion.ul>
        </AnimatePresence>
      </motion.div>

      <motion.div className="absolute top-0 bottom-0 left-0 right-0">
        <GlowingBorder />
      </motion.div>
    </motion.div>
  );
}
