import { container } from "@/transitions";
import { useAnimateStore } from "@/store";
import { motion, AnimatePresence } from "framer-motion";
export default function Scrollable({
  children,
}: {
  children: React.ReactNode;
}) {
  const animate = useAnimateStore();
  return (
    <AnimatePresence>
      {animate.mode && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          className="flex flex-col gap-3 h-screen max-h-[calc(100%-32px)] "
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
