"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { resolveHref } from "@/sanity/lib/utils";

type MenuItem = {
  _type: "homepage" | "page";
  slug: string | null;
  title: string | null;
};

type NavProps = {
  menuItems: MenuItem[] | null;
};

const navItems = [
  { title: "home", slug: "/", _type: "page" },
  { title: "series", slug: "series", _type: "page" },
  { title: "gallery", slug: "gallery", _type: "page" },
  { title: "about", slug: "about", _type: "page" },
];
export default function NavbarLinks({ menuItems }: NavProps) {
  const useFirstPathSegment = () => {
    const pathname = usePathname();
    const firstPathSegment = pathname.split("/").filter(Boolean)[0];
    return firstPathSegment ? `/${firstPathSegment}` : "/";
  };

  const firstPathSegment = useFirstPathSegment();

  return (
    <>
      <div
        // className={`flex gap-8 text-lg font-medium uppercase tracking-widest`}
        className={`flex gap-8 text-xl font-medium`}
      >
        {menuItems?.map((setting) => {
          const href = setting.slug
            ? resolveHref(setting._type, setting.slug)
            : null;

          if (!href) {
            return null;
          }

          return (
            <Link
              // className={`${pathname === href || pathname.includes(href) ? "bg-white underline decoration-2 underline-offset-8 mix-blend-difference invert" : ""}
              // decoration-2 underline-offset-8 hover:bg-white hover:underline hover:mix-blend-difference hover:invert`}
              className={`${firstPathSegment === href ? "text-gray-500" : ""} 
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
