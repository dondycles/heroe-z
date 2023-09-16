import type { Metadata } from "next";
import Component from "./Component";
export const metadata: Metadata = {
  title: "HeroeZ | University",
  description: "Heroes in 6th Dimension.",
};

export default function HeroezUniversity() {
  return (
    <>
      <h1 className="mb-3">
        HERO <span className=" text-primary">UNIVERSITY</span>{" "}
      </h1>
      <Component />
    </>
  );
}
