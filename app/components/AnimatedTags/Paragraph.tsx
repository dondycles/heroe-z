import { item } from "@/transitions";
import { motion } from "framer-motion";

type ParagraphTypes = {
  children: React.ReactNode;
  className: string | "";
};

export default function Paragraph({ children, className }: ParagraphTypes) {
  return (
    <motion.p className={className} variants={item}>
      {children}
    </motion.p>
  );
}
