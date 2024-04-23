import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <div className="z-20">
      <Link href="/" className="text-2xl font-medium  md:text-3xl">
        David Van Loon
      </Link>
    </div>
  );
}
