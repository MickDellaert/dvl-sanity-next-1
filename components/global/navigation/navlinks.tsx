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
        className={`flex gap-8 text-lg font-medium uppercase tracking-widest`}
      >
        {menuItems.map((setting) => {
          const href = resolveHref(setting._type, setting.slug);

          if (!href) {
            return null;
          }

          return (
            <Link
              className={`${pathname === href ? "underline decoration-2 underline-offset-4" : ""}`}
              key={setting.title}
              href={href}
            >
              {setting.title}
            </Link>
          );
        })}
      </div>
    </>
  );
}
