import { Analytics } from "@vercel/analytics/react";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import { DisableDraftMode } from "@/components/visual-editing/DisableDraftMode";
import { SanityLive } from "@/sanity/lib/live";
import Contact from "@/components/global/contact";
import Navbar from "@/components/global/navigation/navbar";
import HomepageSection from "@/components/pages/homepage/homepage-section";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <div className={`tracking-tight`}>
    <div className="tabular-nums tracking-tighter">
      <header>
        <Navbar />
      </header>
      <main className="relative z-30 bg-stone-50 px-x pb-16 pt-12 text-stone-950 md:px-8 md:pb-40">
        {children}
      </main>
      <HomepageSection />
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
