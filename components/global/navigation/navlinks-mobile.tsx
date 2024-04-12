"use client";

import { MenuItem } from "@/sanity/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { resolveHref } from "@/sanity/lib/utils";
import { useState } from "react";
import Hamburger from "./hamburger";

type NavProps = {
  menuItems: MenuItem[];
};

export default function NavLinksMobile({ menuItems }: NavProps) {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  // console.log(openMenu);

  const pathname = usePathname();

  return (
    <>
      {!openMenu && (
        <button
          className="relative z-50 h-8 w-8 pb-1 text-3xl leading-[8px]"
          onClick={toggleMenu}
        >
          <Hamburger />
        </button>
      )}
      {openMenu && (
        <button
          className="relative z-50 h-8 w-8 pb-1 text-3xl leading-[8px]"
          onClick={toggleMenu}
        >
          x
        </button>
      )}
      <div
        className={`flex w-full flex-col justify-center gap-8 bg-white pb-12 pt-24 text-center text-lg font-medium uppercase tracking-widest`}
        style={
          openMenu
            ? { display: "flex", position: "fixed", top: 0, left: 0 }
            : { display: "none", position: "static" }
        }
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
              onClick={toggleMenu}
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
