"use client";

import { useLenis } from "../lenisprovider";

export default function LenisNavTest() {
  const { lenis } = useLenis();

  function scrollToId(id: string) {
    lenis?.scrollTo(`#${id}`);
    console.log("clicked!");
  }

  return <button onClick={() => scrollToId("contact")}>Over</button>;
}
