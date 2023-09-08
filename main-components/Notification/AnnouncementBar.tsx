"use client";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
export default function AnnouncementBar() {
  const [cycled, setCycled] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!cycled) return;
      setCycled((prev) => !prev);
    }, 10000);

    return () => clearTimeout(timeout);
  }, [cycled]);
  return (
    <div
      className={`fixed bottom-0 left-0 w-screen  duration-300 bg-primaryred text-white z-20  ${
        cycled && "opacity-0 pointer-events-none"
      }`}
    >
      <Marquee
        speed={100}
        play={!cycled}
        loop={0}
        delay={0.5}
        pauseOnClick
        pauseOnHover
        onCycleComplete={() => {
          setCycled(true);
        }}
      >
        <span>
          Attention to all heroes : be wary of malicious links! Official links
          can be found on this website. Official team will not DM YOU!
        </span>
      </Marquee>
    </div>
  );
}
