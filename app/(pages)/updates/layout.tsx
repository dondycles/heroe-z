import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "HeroeZ | Updates",
  description: "Heroes in 6th Dimension.",
};
export default function Updates({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className="text-primary">UPDATES</h1>
      {children}
    </>
  );
}
