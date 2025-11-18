import React from "react";

export default function StickyTitle({ stickyTitle }: { stickyTitle: string }) {
  return (
    <h2 className="sticky top-[50px] z-30 col-span-12 mb-6 self-start pt-1 leading-[0.94] mix-blend-difference invert md:top-16">
      {stickyTitle}
    </h2>
  );
}
