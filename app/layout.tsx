import "./globals.css";
import type { Metadata } from "next";
import { Kanit, Montserrat } from "next/font/google";
import { Providers } from "./components/ui-provider";
const kanit = Kanit({
  subsets: ["latin"],
  weight: ["200", "400"],
  variable: "--font-kanit",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "900",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "HeroeZ",
  metadataBase: new URL("https://heroezofficial.com"),
  description: "Heroes in 6th Dimension.",
  twitter: {
    title: "HeroeZ | Heroes in 6th Dimension.",
    description: "Heroes in 6th Dimension.",
    card: "summary_large_image",
    creator: "@HEROEZofficial",
    images: {
      url: "/images/summary.png",
      alt: "HeroeZ",
    },
  },
  openGraph: {
    title: "HeroeZ | Heroes in 6th Dimension.",
    description: "Heroes in 6th Dimension.",
    type: "website",
    siteName: "HeroeZ | Heroes in 6th Dimension.",
    url: "https://heroezofficial.com",
    images: [
      {
        url: "/images/summary.png",
        width: 800,
        height: 800,
      },
      {
        url: "/images/summary.png",
        width: 1920,
        height: 1080,
      },
    ],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-transparent ${kanit.variable} ${montserrat.variable} font-kanit `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
