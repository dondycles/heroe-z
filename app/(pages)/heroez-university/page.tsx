import type { Metadata } from "next";
import Component from "./Component";
export const metadata: Metadata = {
  title: "HeroeZ | University",
  description: "Heroes in 6th Dimension.",
};

export default function HeroezUniversity() {
  return (
    <>
      <h1 className="mb-6">
        HERO <span className=" text-primaryblue">UNIVERSITY</span>{" "}
      </h1>
      <Component />
    </>
  );
}
