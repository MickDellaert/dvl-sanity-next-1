"use client";

import Link from "next/link";
import { resolveHref } from "@/sanity/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

type MenuItem = {
  _type: "homepage" | "page" | "section";
  slug: string | null;
  title: string | null;
};

type NavProps = {
  menuItems: MenuItem[] | null;
  openMenu: boolean;
  onRouteCheckAction: (href: string) => void;
};

const navItems = [
  { title: "home", slug: "/", _type: "page" },
  { title: "series", slug: "series", _type: "page" },
  { title: "gallery", slug: "gallery", _type: "page" },
  { title: "about", slug: "about", _type: "page" },
];

export default function NavbarLinksMobile({
  menuItems,
  openMenu,
  onRouteCheckAction,
}: NavProps) {
  const useFirstPathSegment = () => {
    const pathname = usePathname();
    const firstPathSegment = pathname.split("/").filter(Boolean)[0];
    return firstPathSegment ? `/${firstPathSegment}` : "/";
  };

  const firstPathSegment = useFirstPathSegment();
  return (
    <AnimatePresence>
      {openMenu && (
        <motion.div
          className={`fixed left-0 top-0 z-40 flex h-dvh w-full flex-col bg-stone-300 px-6 pb-64 md:pb-64`}
          // animate={openMenu ? "open" : "closed"}
          // variants={{ open: { opacity: 100 }, closed: { opacity: 0 } }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="relative mt-[152px] flex flex-col gap-y-10 pt-16 text-3xl
        before:absolute before:left-0 before:top-0 before:h-1 before:w-12 before:bg-stone-950 before:content-['']"
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
                  className={`${firstPathSegment === href ? "text-stone-500" : ""} 
            hover:text-stone-950`}
                  key={setting.title}
                  href={href}
                  onClick={() => onRouteCheckAction(href)}
                  prefetch={true}
                >
                  {setting.title}
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
