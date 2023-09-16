import Image from "next/image";

import type { Metadata } from "next";
import Component from "./Component";
export const metadata: Metadata = {
  title: "HeroeZ | Gallery",
  description: "Heroes in 6th Dimension.",
};
export default function Gallery() {
  return (
    <>
      <h1 className="mb-3 text-primary">GALLERY</h1>
      <Component />
    </>
  );
}
