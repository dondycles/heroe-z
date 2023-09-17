import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Light Novel",
  description: "Heroes in 6th Dimension.",
};

export default function QuestSystem({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>
        QUEST <span className=" text-primary">SYSTEM</span>{" "}
      </h1>
      {children}
    </>
  );
}
