"use client";

import { MenuItem } from "@/sanity/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { resolveHref } from "@/sanity/lib/utils";

type NavProps = {
  menuItems: MenuItem[];
};

export default function NavLinks({ menuItems }: NavProps) {
  const pathname = usePathname();

  return (
    <>
      <div
        // className={`flex gap-8 text-lg font-medium uppercase tracking-widest`}
        className={`flex gap-8 text-lg font-medium`}
      >
        {menuItems.map((setting) => {
          const href = resolveHref(setting._type, setting.slug);

          if (!href) {
            return null;
          }

          return (
            <Link
              className={`${pathname === href || pathname.includes(href) ? "underline decoration-2 underline-offset-8 bg-white mix-blend-difference invert" : ""} 
              decoration-2 underline-offset-8 hover:underline hover:bg-white hover:mix-blend-difference hover:invert`}
              key={setting.title}
              href={href}
              prefetch={true}
            >
              {setting.title}
            </Link>
          );
        })}
      </div>
    </>
  );
}
