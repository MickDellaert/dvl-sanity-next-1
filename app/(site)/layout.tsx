import { Analytics } from "@vercel/analytics/react";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import { DisableDraftMode } from "@/components/visual-editing/DisableDraftMode";
import { SanityLive } from "@/sanity/lib/live";

import Footer from "@/components/global/footer";
import NavbarWrapper from "@/components/global/navigation/navbar-wrapper";
import Contact from "@/components/global/contact";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <div className={`tracking-tight`}>
    <div className="tabular-nums tracking-tighter">
      <NavbarWrapper />
      <main className="relative z-30 bg-gray-50 px-x pb-16 pt-12 md:px-8 md:pb-40">
        {children}
      </main>
      <Contact />
      {/* <Footer /> */}
      <SanityLive />
      {(await draftMode()).isEnabled && (
        <>
          <DisableDraftMode />
          <VisualEditing />
        </>
      )}
      <Analytics />
    </div>
    // </div>
  );
}
