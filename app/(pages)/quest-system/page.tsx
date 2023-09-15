import type { Metadata } from "next";
import Component from "./Component";
export const metadata: Metadata = {
  title: "Light Novel",
  description: "Heroes in 6th Dimension.",
};

export default function QuestSystem() {
  return (
    <>
      <h1 className="mb-6">
        QUEST <span className=" text-primary">SYSTEM</span>{" "}
      </h1>
      <Component />
    </>
  );
}
