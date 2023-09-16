import type { Metadata } from "next";
import Component from "./Component";
export const metadata: Metadata = {
  title: "HeroeZ | Updates",
  description: "Heroes in 6th Dimension.",
};
export default function Updates() {
  return (
    <>
      <h1 className="text-primary mb-3">UPDATES</h1>
      <Component />
    </>
  );
}
