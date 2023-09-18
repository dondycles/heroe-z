import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "HeroeZ | Web Novel",
  description: "Heroes in 6th Dimension.",
};

export default function WebNovel({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>
        WEB <span className="text-primary">NOVEL</span>
      </h1>
      {children}
    </>
  );
}
