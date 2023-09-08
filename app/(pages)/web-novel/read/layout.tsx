import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HeroeZ | Read Chapters",
};
export default function ReadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
