"use client";

// import { useDraftModeEnvironment } from "next-sanity/hooks";
// import Link from "next/link";

// export function DisableDraftMode() {
//   const environment = useDraftModeEnvironment();

//   // Only show the disable draft mode button when outside of Presentation Tool
//   if (environment !== "live" && environment !== "unknown") {
//     return null;
//   }

//   return (
//     // eslint-disable-next-line @next/next/no-html-link-for-pages
//     <a
//       href="/api/draft-mode/disable"
//       className="fixed bottom-4 right-4 bg-gray-50 px-4 py-2"
//     >
//       Disable Draft Mode
//     </a>
//   );
// }

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { disableDraftMode } from "@/sanity/lib/actions";

export function DisableDraftMode() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  if (window !== window.parent || !!window.opener) {
    return null;
  }

  const disable = () =>
    startTransition(async () => {
      await disableDraftMode();
      router.refresh();
    });

  return (
    <div>
      {pending ? (
        "Disabling draft mode..."
      ) : (
        <button
          className="fixed bottom-4 right-4 bg-gray-200 px-4 py-2"
          type="button"
          onClick={disable}
        >
          Disable draft mode
        </button>
      )}
    </div>
  );
}
