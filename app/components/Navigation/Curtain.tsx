"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  useAnimateStore,
  useNavigationStore,
  useRandomCurtainColor,
} from "@/store";
import logohighres from "@/public/images/icons/logohighres.webp";
import { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/react";
export default function Curtain({
  isNavigating,
  navigate,
}: {
  isNavigating: boolean;
  navigate: () => void;
}) {
  const animate = useAnimateStore();
  const randomcurtain = useRandomCurtainColor();
  const [timesCurtainsMoved, setTimesCurtainsMoved] = useState<number>(0);
  useEffect(() => {
    if (isNavigating) {
      animate.toggleMode(false);
    } else {
      animate.toggleMode(true);
    }
  }, [isNavigating]);

  return (
    <div className=" fixed top-0 left-0 w-screen h-screen z-[100] pointer-events-none">
      <AnimatePresence initial={false}>
        {isNavigating && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "0%", opacity: 0, scale: 1.1 }}
            transition={{ duration: 1, type: "spring", damping: 14 }}
            onAnimationStart={() => {
              setTimesCurtainsMoved(0);
            }}
            onAnimationComplete={() => {
              setTimesCurtainsMoved((prev) => prev + 1);
              if (timesCurtainsMoved === 1) return;
              setTimeout(() => {
                navigate();
              }, 1000);
            }}
            className={`w-full h-full px-6 pb-6 flex flex-col gap-4 items-center justify-center  ${
              randomcurtain.randomIndex === 1
                ? "bg-[#bceaff] text-[#1d1d1d]"
                : "bg-primaryred text-[#cccccc]"
            }`}
          >
            <Image
              priority
              quality={100}
              className="max-w-[300px] w-full"
              src={logohighres}
              alt="HeroeZ"
            />
            {/* <p className=" text-xs">
              {navigation.willNavigateTo === "/"
                ? ""
                : "Navigating you to " +
                  navigation.willNavigateTo
                    .replace("/", "")
                    .replace("-", " ")
                    .toLocaleUpperCase()}
            </p> */}
            <Spinner color="current" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
