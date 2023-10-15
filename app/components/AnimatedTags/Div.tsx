import { item } from "@/transitions";
import { motion } from "framer-motion";
import { HTMLAttributes } from "react";

interface DivTypes extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Div({ className, children }: DivTypes) {
  return (
    <motion.div className={"" + className} variants={item}>
      {children}
    </motion.div>
  );
}
