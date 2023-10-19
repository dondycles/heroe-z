import GlowingBorder from "@/app/components/Styles/GlowingBorder";
import { Button, Divider } from "@nextui-org/react";
import Image from "next/image";
import { Key, useEffect, useRef, useState } from "react";

export default function HeroCard({ nft }: { nft: any[any] }) {
  const [showDetails, setShowDetails] = useState(false);
  const [width, setWidth] = useState<number | undefined>(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWidth(ref.current?.clientHeight);
  }, []);
  return (
    <div
      ref={ref}
      onClick={() => setShowDetails(false)}
      style={{ width: width }}
      className=" h-full aspect-square glowing-border p-[2px] bg-primary/20 rounded-md sm:rounded-xl relative overflow-hidden"
    >
      <Image
        className="h-full aspect-square object-cover rounded-md sm:rounded-xl duration-100 "
        src={nft.src}
        quality={100}
        alt={String(nft.src)}
        placeholder="blur"
      />

      <div className="absolute top-0 bottom-0 left-0 right-0">
        <GlowingBorder />
      </div>
    </div>
  );
}
