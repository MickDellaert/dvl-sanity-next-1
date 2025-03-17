"use client";

import { MenuItem } from "@/sanity/types";
import Link from "next/link";
import { resolveHref } from "@/sanity/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

type NavProps = {
  menuItems: MenuItem[];
  pathname: string;
  openMenu: boolean;
  onRouteCheckAction: (href: string) => void;
};

export default function NavbarLinksMobile({
  menuItems,
  openMenu,
  pathname,
  onRouteCheckAction,
}: NavProps) {
  return (
    <AnimatePresence>
      {openMenu && (
        <motion.div
          className={`fixed left-0 top-0 z-40 flex h-dvh w-full flex-col bg-stone-200 px-6 pb-64 md:pb-64`}
          // animate={openMenu ? "open" : "closed"}
          // variants={{ open: { opacity: 100 }, closed: { opacity: 0 } }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="relative mt-40 flex flex-col gap-y-3 pt-8 text-3xl
        before:absolute before:left-0 before:top-0 before:h-[4px] before:w-16 before:bg-black before:content-['']"
          >
            {menuItems.map((setting) => {
              const href = resolveHref(setting._type, setting.slug);

              if (!href) {
                return null;
              }

              return (
                <Link
                  className={`${pathname === href || pathname.includes(href) ? "text-gray-500" : ""} 
            hover:text-black`}
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
