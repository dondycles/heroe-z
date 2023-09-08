import { motion, AnimatePresence } from "framer-motion";
import {
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";
import { Button } from "@nextui-org/button";
export default function MenuButton({
  toggleMenu,
  menuStatus,
}: {
  toggleMenu: () => void;
  menuStatus: boolean;
}) {
  return (
    <Button
      onClick={() => toggleMenu()}
      className={`group btn-default  z-[51] max-w-[100px] w-full overflow-hidden  text-primaryblue ${
        menuStatus
          ? "bg-primaryblue text-content1 sm:hover:bg-primaryblue/[10%]  sm:hover:text-primaryblue  "
          : "  bg-primaryblue/[10%] "
      }`}
    >
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
