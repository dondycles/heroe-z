import { useState } from "react";
import { motion } from "framer-motion";
export default function RoadMapItem({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showMe, setShowMe] = useState(false);
  return (
    <motion.div
      layout
      initial={{ width: "150px" }}
      animate={{ width: showMe ? "500px" : "150px" }}
      transition={{ ease: "easeInOut", type: "spring" }}
      onClick={() => {
        setShowMe((prev) => !prev);
      }}
      className={`h-full rounded-xl bg-primary p-3 cursor-pointer`}
    >
      {children}
    </motion.div>
  );
}
