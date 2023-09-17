import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "HeroeZ | About",
  description: "Heroes in 6th Dimension.",
};
export default function About({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className="text-primary">ABOUT</h1>
      {children}
    </>
  );
}
