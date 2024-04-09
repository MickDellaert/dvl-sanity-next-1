import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <div className="z-20">
    <Link href="/" className="text-2xl lg:text-3xl font-semibold uppercase tracking-widest">
      David Van Loon
    </Link>
    </div>
  );
}
