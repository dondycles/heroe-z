import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "HeroeZ | Team",
  description: "Heroes in 6th Dimension.",
};

export default function Team({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className="text-primary">TEAM</h1>
      {children}
    </>
  );
}
