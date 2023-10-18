import { ImageProps } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";
import { HTMLAttributes } from "react";

type Attribute = {
  i: number;
  delay: number;
  alt: string;
  source: StaticImageData;
};

export default function ImageTile({ source, alt, i, delay }: Attribute) {
  return (
    <Image
      src={source}
      alt={alt}
      key={alt + 1}
      style={{
        animationDelay: String(i / delay + "s"),
      }}
      className={`object-cover w-fit bg-primary rounded-md sm:rounded-xl animate-float ease-in-out duration-300 ${
        i % 2 != 0 && !alt.includes("GIF") ? "aspect-square" : "aspect-auto"
      }`}
    />
  );
}
