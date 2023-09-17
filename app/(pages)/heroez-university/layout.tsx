import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "HeroeZ | University",
  description: "Heroes in 6th Dimension.",
};

export default function HeroezUniversity({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>
        HERO <span className=" text-primary">UNIVERSITY</span>{" "}
      </h1>
      {children}
    </>
  );
}
