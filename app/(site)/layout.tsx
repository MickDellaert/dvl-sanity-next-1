import { Analytics } from "@vercel/analytics/react";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import { DisableDraftMode } from "@/components/visual-editing/DisableDraftMode";
import { SanityLive } from "@/sanity/lib/live";

import Footer from "@/components/global/footer";
import NavbarWrapper from "@/components/global/navigation/navbar-wrapper";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <div className={`tracking-tight`}>
    <>
      <NavbarWrapper />
      <main className="px-8 pt-16">{children}</main>
      <Footer />
      <SanityLive />
      {(await draftMode()).isEnabled && (
        <>
          <DisableDraftMode />
          <VisualEditing />
        </>
      )}
      <Analytics />
    </>
    // </div>
  );
}
