"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  useAnimateStore,
  useNavigationStore,
  useRandomCurtainColor,
} from "@/store";
import logohighres from "@/public/logohighres.webp";
import { useEffect } from "react";
import { Spinner } from "@nextui-org/spinner";
export default function Curtain({
  isNavigating,
  navigate,
}: {
  isNavigating: boolean;
  navigate: () => void;
}) {
  const animate = useAnimateStore();
  const navigation = useNavigationStore();
  const randomcurtain = useRandomCurtainColor();
  useEffect(() => {
    if (isNavigating) {
      animate.toggleMode(false);
    } else {
      animate.toggleMode(true);
    }
  }, [isNavigating]);
  return (
    <div className=" fixed top-0 left-0 w-screen h-screen z-[51] pointer-events-none">
      <AnimatePresence initial={false}>
        {isNavigating && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "0%", opacity: 0, scale: 1.1 }}
            transition={{ duration: 1, type: "spring", damping: 14 }}
            onAnimationComplete={() => {
              setTimeout(() => {
                navigate();
              }, 1000);
            }}
            className={`w-full h-full px-6 pb-6 flex flex-col gap-4 items-center justify-center  ${
              randomcurtain.randomIndex === 1
                ? "bg-[#bceaff] text-neutral-800"
                : "bg-primaryred text-white"
            }`}
          >
            <Image
              priority
              quality={100}
              className="max-w-[300px] w-full"
              src={logohighres}
              alt="HeroeZ"
            />
            <p>
              {navigation.willNavigateTo === "/"
                ? ""
                : "Navigating you to " +
                  navigation.willNavigateTo
                    .replace("/", "")
                    .replace("-", " ")
                    .toLocaleUpperCase()}
            </p>
            <Spinner
              className=" text-background"
              color={randomcurtain.randomIndex === 1 ? "default" : "white"}
              labelColor="foreground"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
