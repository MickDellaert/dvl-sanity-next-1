import { Analytics } from '@vercel/analytics/react';

import type { Metadata } from "next";
import { Montserrat} from "next/font/google"

import "../globals.css";
import NavBar from "@/components/global/navbar";
import Footer from "@/components/global/footer";

// const Inter = Inter({ subsets: ["latin"], display: "swap" });

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  // style: ["normal", "italic"],
  display: "swap",
  variable: "--font-montserrat"
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className={`overflow-x-hidden`}>
        {/* <body className={inter.className}> */}
        <>
          <NavBar />
          {children}
          <Analytics/>
          <Footer/>
        </>
      </body>
    </html>
  );
}
