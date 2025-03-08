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
  const navItems = [
    { title: "series", slug: "series", _type: "page" },
    { title: "gallery", slug: "gallery", _type: "page" },
    { title: "about", slug: "about", _type: "page" },
  ];

  return (
    <>
      <div
        // className={`flex gap-8 text-lg font-medium uppercase tracking-widest`}
        className={`flex gap-8 text-xl font-medium`}
      >
        {navItems.map((setting) => {
          const href = resolveHref(setting._type, setting.slug);

          if (!href) {
            return null;
          }

          return (
            <Link
              // className={`${pathname === href || pathname.includes(href) ? "bg-white underline decoration-2 underline-offset-8 mix-blend-difference invert" : ""}
              // decoration-2 underline-offset-8 hover:bg-white hover:underline hover:mix-blend-difference hover:invert`}
              className={`${pathname === href || pathname.includes(href) ? "text-gray-500" : ""} 
               hover:text-black`}
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
