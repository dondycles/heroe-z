import type { Metadata } from "next";
import Component from "./Component";
export const metadata: Metadata = {
  title: "HeroeZ | Studio Z",
  description: "Heroes in 6th Dimension.",
};
export default function StudioZ() {
  return (
    <>
      <h1 className="mb-3">
        STUDIO <span className=" text-primary">Z</span>{" "}
      </h1>

      <Component />
    </>
  );
}
