import clsx from "clsx";
import { ClassValue } from "clsx";
import { HTMLAttributes } from "react";
import { twMerge } from "tw-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlowingBorderProps extends HTMLAttributes<HTMLDivElement> {}

export default function GlowingBorder({ className }: GlowingBorderProps) {
  return (
    <div
      className={cn(
        "absolute bg-gradient-to-b blur-lg from-primary via-transparent to-primary top-[-404.5] left-[202] translate-x-[-50%] translate-y-[-50%]  h-auto aspect-square w-full object-center  z-[-1] rotationalpanelborder pointer-events-none" +
          className
      )}
    />
  );
}
