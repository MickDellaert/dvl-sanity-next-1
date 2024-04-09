"use client";

import { MenuItem } from "@/sanity/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { resolveHref } from "@/sanity/lib/utils";
import { useState } from "react";

type NavProps = {
  menuItems: MenuItem[];
};

export default function NavLinksMobile({ menuItems }: NavProps) {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  console.log(openMenu);

  const pathname = usePathname();

  return (
    <>
      <button className="w-8 h-8 text-3xl z-10" style={openMenu ? { opacity: 1 } : { opacity: 1 }} onClick={toggleMenu}>
        x
      </button>
      <div
        className={`flex flex-col text-lg font-medium uppercase tracking-widest gap-8 bg-white w-full pb-12 text-center justify-center pt-24`}
        style={
          openMenu ? { display: "flex", position: "fixed", top: 0, left: 0 } : { display: "none", position: "static" }
        }
      >
        {menuItems.map((setting) => {
          const href = resolveHref(setting._type, setting.slug);

          if (!href) {
            return null;
          }

          return (
            <Link
              className={`${pathname === href ? "underline underline-offset-4 decoration-2" : ""}`}
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
