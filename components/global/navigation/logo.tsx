import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <div className="">
      {/* <Link href="/" className="text-2xl font-medium uppercase tracking-wider md:text-3xl"> */}
      {/* <Link href="/" className="text-4xl font-medium md:text-4xl mix-blend-difference invert z-20">
        David Van Loon
      </Link> */}
      <Link href="/" className="z-20 text-4xl font-medium md:text-4xl">
        David Van Loon
      </Link>
    </div>
  );
}
