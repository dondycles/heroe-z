"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";
import { Button } from "@nextui-org/react";
import { useThemeStore } from "@/store";
import { usePathname } from "next/navigation";
import GlowingBorder from "../Styles/GlowingBorder";
export default function MenuButton({
  toggleMenu,
  menuStatus,
}: {
  toggleMenu: () => void;
  menuStatus: boolean;
}) {
  const theme = useThemeStore();
  const pathname = usePathname();

  return (
    <Button
      onClick={() => toggleMenu()}
      className={`group relative flex lg:hidden btn-default-menu  z-[51] max-w-[100px] w-full overflow-hidden backdrop-blur-lg text-primary after:content-[""] after:absolute after:duration-150 after:inset-[2px] after:rounded-xl after:z-[-1]
      ${theme.mode === "dark" && pathname === "/" && "backdrop-brightness-50"}
      ${
        theme.mode === "dark"
          ? " shadow-[0_0_20px_#ff444466]"
          : " shadow-[0_0_20px_#0099ff66]"
      }
      ${
        menuStatus
          ? "bg-primary after:bg-primary/10 hover:after:bg-background/90 text-content1 sm:hover:bg-primary/10  sm:hover:text-primary  "
          : "  bg-primary/10 after:bg-background/90"
      }`}
    >
      <GlowingBorder />
      <AnimatePresence initial={false}>
        {menuStatus ? (
          <motion.p
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            key={String(menuStatus)}
            className="flex text-xs items-center gap-1 absolute"
          >
            <span className=" sm:group-hover:text-lg duration-150">
              <TbPlayerTrackPrevFilled />
            </span>
            <span className=" sm:group-hover:translate-x-1 duration-150">
              CLOSE
            </span>
          </motion.p>
        ) : (
          <motion.p
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            key={String(menuStatus)}
            className="flex text-xs items-center gap-1 absolute"
          >
            <span className=" sm:group-hover:-translate-x-1 duration-150">
              MENU
            </span>
            <span className=" sm:group-hover:text-lg duration-150">
              <TbPlayerTrackNextFilled />
            </span>
          </motion.p>
        )}
      </AnimatePresence>
    </Button>
  );
}
