import type { Metadata } from "next";
import Component from "./Component";
export const metadata: Metadata = {
  title: "HeroeZ | Web Novel",
  description: "Heroes in 6th Dimension.",
};

export default function WebNovel() {
  return (
    <>
      <h1>
        WEB <span className="text-primary">NOVEL</span>
      </h1>
      <Component />
    </>
  );
}
