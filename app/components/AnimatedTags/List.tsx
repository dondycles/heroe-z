import { HTMLAttributes, Key } from "react";
import { item } from "@/transitions";
import { motion } from "framer-motion";

interface ListTypes extends HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
  key: Key;
}

export default function List({ children, key, className }: ListTypes) {
  return (
    <motion.li className={className} variants={item} key={key}>
      {children}
    </motion.li>
  );
}
