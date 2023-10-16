import GlowingBorder from "@/app/components/Styles/GlowingBorder";
import { Button, Divider } from "@nextui-org/react";
import Image from "next/image";
import { Key, useState } from "react";

export default function HeroCard({ nft }: { nft: any[any] }) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div
      onClick={() => setShowDetails(false)}
      className=" h-full w-auto aspect-square glowing-border p-[2px] bg-primary/20 rounded-xl relative overflow-hidden"
    >
      <Image
        className="h-full w-auto aspect-square object-cover rounded-xl duration-100 "
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
