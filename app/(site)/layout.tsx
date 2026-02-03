import "../globals.css";
import { Analytics } from "@vercel/analytics/react";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import { DisableDraftMode } from "@/components/visual-editing/DisableDraftMode";
import { SanityLive } from "@/sanity/lib/live";
import Contact from "@/components/global/contact";
import Navbar from "@/components/global/navigation/navbar";
import HomepageSection from "@/components/pages/homepage/homepage-section";

import { ViewTransitions } from "next-view-transitions";
import { PageTransition } from "@/components/shared/page-transition";
import FadeWrapper from "@/components/shared/fade-wrapper";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="tabular-nums tracking-tighter">
        <FadeWrapper>
          <header>
            <Navbar />
          </header>
          <main
            id="page"
            className="relative z-30 bg-stone-50 px-x pb-16 pt-12 text-stone-950 md:px-8 md:pb-40"
          >
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
        </FadeWrapper>
      </div>
    </>
  );
}
