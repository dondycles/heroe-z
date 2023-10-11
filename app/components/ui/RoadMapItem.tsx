import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GlowingBorder from "../Styles/GlowingBorder";
export default function RoadMapItem({ index }: { index: number }) {
  const [showMe, setShowMe] = useState(false);
  return (
    <motion.div
      layout
      initial={{ minHeight: "150px" }}
      animate={{ minHeight: showMe ? "500px" : "150px" }}
      transition={{ ease: "easeInOut", type: "spring" }}
      onClick={() => {
        setShowMe((prev) => !prev);
      }}
      className={`w-full rounded-xl bg-primary/5 p-[2px] cursor-pointer relative  glowing-border overflow-hidden bg`}
    >
      <div className="w-full h-full rounded-lg p-2 bg-background/70">
        {!showMe ? (
          <motion.p
            key={"phase" + index}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Phase {index}
          </motion.p>
        ) : (
          <motion.p
            layout
            key={"description" + index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            officiis architecto voluptatem veniam, harum magnam doloremque
            dicta, ipsam obcaecati ex eligendi sapiente alias. Consequatur
            incidunt adipisci dolor, quibusdam delectus aliquid!
          </motion.p>
        )}
      </div>

      <div className="absolute top-0 bottom-0 left-0 right-0">
        <GlowingBorder />
      </div>
    </motion.div>
  );
}
