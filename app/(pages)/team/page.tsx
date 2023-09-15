import type { Metadata } from "next";
import Component from "./Component";
export const metadata: Metadata = {
  title: "HeroeZ | Team",
  description: "Heroes in 6th Dimension.",
};
export default function Team() {
  return (
    <>
      <h1 className="text-primary mb-6">TEAM</h1>
      <Component />
    </>
  );
}
