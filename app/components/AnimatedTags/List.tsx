import { HTMLAttributes, Key } from "react";
import { item } from "@/transitions";
import { motion } from "framer-motion";

interface ListTypes extends HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
}

export default function List({ children, className }: ListTypes) {
  return (
    <motion.li className={className} variants={item}>
      {children}
    </motion.li>
  );
}
