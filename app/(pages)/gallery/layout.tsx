import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "HeroeZ | Gallery",
  description: "Heroes in 6th Dimension.",
};

export default function Gallery({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className="text-primary">THE STRONGEST</h1>
      {children}
    </>
  );
}
