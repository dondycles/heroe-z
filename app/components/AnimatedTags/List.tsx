import { Key } from "react";
import { item } from "@/transitions";
import { motion } from "framer-motion";

type ListTypes = {
  children: React.ReactNode;
  key: Key;
  className: string | undefined;
};

export default function List({ children, key, className }: ListTypes) {
  return (
    <motion.li className={className} variants={item} key={key}>
      {children}
    </motion.li>
  );
}
