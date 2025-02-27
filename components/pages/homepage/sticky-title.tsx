import React from "react";

export default function StickyTitle({ stickyTitle }: { stickyTitle: string }) {
  return (
    <h2 className="sticky top-12 z-30 mb-6 w-fit self-start whitespace-nowrap pt-1 text-3xl mix-blend-difference invert md:top-16 md:text-4xl">
      {stickyTitle}
    </h2>
  );
}
