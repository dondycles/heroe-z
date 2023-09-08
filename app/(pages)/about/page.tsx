import type { Metadata } from "next";
import Component from "./Component";
export const metadata: Metadata = {
  title: "HeroeZ | About",
  description: "Heroes in 6th Dimension.",
};
export default function About() {
  return (
    <>
      <h1 className="mb-6 text-primaryblue">ABOUT</h1>
      <Component />
    </>
  );
}
