"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { resolveHref } from "@/sanity/lib/utils";
import LenisNavTest from "./lenis-nav-test";
// import { Link } from "next-view-transitions";

type MenuItem = {
  _type: "homepage" | "page" | "section";
  slug: string | null;
  title: string | null;
};

type NavProps = {
  menuItems?: MenuItem[] | null;
};

const testMenuItems: MenuItem[] = [
  { _type: "homepage", slug: "home", title: "Home" },
  { _type: "page", slug: "series", title: "Series" },
  { _type: "page", slug: "gallery", title: "Gallery" },
  { _type: "page", slug: "about", title: "About" },
  { _type: "section", slug: "contact", title: "Contact" },
];

export default function NavbarLinks({ menuItems }: NavProps) {
  const useFirstPathSegment = () => {
    const pathname = usePathname();
    const firstPathSegment = pathname.split("/").filter(Boolean)[0];
    return firstPathSegment ? `/${firstPathSegment}` : "/";
  };

  const firstPathSegment = useFirstPathSegment();

  const handleSectionClick = (slug: string) => {
    const el = document.getElementById(slug);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex gap-8 whitespace-nowrap text-xl font-medium">
      {menuItems?.map((item) => {
        if (!item.slug) return null;

        // Section links scrollen
        if (item._type === "section") {
          return (
            <a
              key={item.title}
              href={`#${item.slug}`}
              onClick={(e) => {
                e.preventDefault();
                handleSectionClick(item.slug!);
              }}
              className="hover:text-stone-950"
            >
              {item.title}
            </a>
          );
        }

        // Normale pagina links met Next.js Link
        const href = resolveHref(item._type, item.slug);
        return (
          <Link
            key={item.title}
            href={href || "/"}
            prefetch={true}
            className={`${firstPathSegment === href ? "text-stone-500" : ""} hover:text-stone-700`}
          >
            {item.title}
          </Link>
        );
      })}
      {/* <LenisNavTest /> */}
    </div>
  );
}
