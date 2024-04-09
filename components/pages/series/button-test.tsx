"use client";

import { useRouter } from "next/navigation";

import React from "react";

export default function ButtonTest() {
  const router = useRouter();

  return (
    <>
      {/* <div>ButtonTest</div> */}
      <div className="top-[72px] z-30 mb-12 mt-16 flex h-10 w-full flex-row justify-end gap-9 bg-white text-lg font-medium tracking-widest md:sticky md:text-xl">
        <button
          className="text-lg md:text-xl text-left"
          onClick={() => {
            router.push("/work/forgotten-inventions");
          }}
        >
          Forgotten Inventions
        </button>
        <button
          className="text-lg md:text-xl text-left"
          onClick={() => {
            router.push("/work/bygone-toys");
          }}
        >
          Bygone Toys
        </button>
        <button
          className="text-lg md:text-xl text-left"
          onClick={() => {
            router.push("/work/future-inventions");
          }}
        >
          Future Inventions
        </button>
      </div>
    </>
  );
}
