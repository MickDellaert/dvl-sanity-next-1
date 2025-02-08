import React from "react";

export default function StickyTitle({ stickyTitle }: { stickyTitle: string }) {
  return (
    <h2 className="sticky top-16 pt-1 text-4xl leading-10 mix-blend-difference invert">
      {stickyTitle}
    </h2>
  );
}
