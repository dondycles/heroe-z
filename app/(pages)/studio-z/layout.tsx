import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "HeroeZ | Studio Z",
  description: "Heroes in 6th Dimension.",
};
export default function StudioZ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>
        STUDIO <span className=" text-primary">Z</span>{" "}
      </h1>
      {children}
    </>
  );
}
