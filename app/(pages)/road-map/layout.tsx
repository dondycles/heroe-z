import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "HeroeZ | Road Map",
  description: "Heroes in 6th Dimension.",
};
export default function RoadMap({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>
        ROAD <span className="text-primary">MAP</span>{" "}
      </h1>
      {children}
    </>
  );
}
