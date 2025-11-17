"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const isFirefox =
  typeof navigator !== "undefined" &&
  navigator.userAgent.toLowerCase().includes("firefox");

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (isFirefox) return; // Skip transitions in Firefox

    if (!document.startViewTransition) {
      // TypeScript-compatible fallback
      document.startViewTransition = ((callback?: any) => {
        callback?.();
        return {
          finished: Promise.resolve(),
          ready: Promise.resolve(),
          types: [] as string[],
          updateCallbackDone: Promise.resolve(),
          skipTransition: () => {},
        } as unknown as ViewTransition;
      }) as typeof document.startViewTransition;
    }

    document.startViewTransition(() => {
      // App Router rendert automatisch de nieuwe content
    });
  }, [pathname]);

  return <>{children}</>;
}
