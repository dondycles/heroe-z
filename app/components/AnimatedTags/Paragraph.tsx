import { item } from "@/transitions";
import { motion } from "framer-motion";
import { HTMLAttributes } from "react";

interface ParagraphTypes extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export default function Paragraph({ className, children }: ParagraphTypes) {
  return (
    <motion.p className={"" + className} variants={item}>
      {children}
    </motion.p>
  );
}
