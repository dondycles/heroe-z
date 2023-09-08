import type { Metadata } from "next";
import Component from "./Component";
export const metadata: Metadata = {
  title: "HeroeZ | Studio Z",
  description: "Heroes in 6th Dimension.",
};
export default function StudioZ() {
  return (
    <>
      <h1 className="mb-6">
        STUDIO <span className=" text-primaryblue">Z</span>{" "}
      </h1>

      <Component />
    </>
  );
}
