import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Montserrat } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { Golos_Text } from "next/font/google";
import { Public_Sans } from "next/font/google";
import { Manrope } from "next/font/google";

import "./globals.css";

// const Inter = Inter({ subsets: ["latin"], display: "swap" });

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  // style: ["normal", "italic"],
  display: "swap",
  variable: "--font-montserrat",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-dmSans",
});

const golosText = Golos_Text({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-golosText",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-publicSans",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-manrope",
});

const gaId = process.env.NEXT_PUBLIC_GA_ID;
console.log(gaId);

export const metadata: Metadata = {
  title: "David van Loon",
  description: "Antwerp based contemporary artist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${publicSans.variable} ${golosText.variable} ${manrope.variable} overflow-x-hidden`}
    >
      <body className="mx-auto mt-0 min-h-screen bg-gray-50 font-manrope font-medium tracking-tight">
        {children}
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
