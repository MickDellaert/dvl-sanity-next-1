"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const isFirefox =
  typeof navigator !== "undefined" &&
  navigator.userAgent.toLowerCase().includes("firefox");

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (isFirefox) return;

    if (!('startViewTransition' in document)) {
      return;
    }

    (document as any).startViewTransition(() => {
    });
  }, [pathname]);

  return <>{children}</>;
}