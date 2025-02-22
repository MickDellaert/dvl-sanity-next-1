"use client";

import { MenuItem } from "@/sanity/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { resolveHref } from "@/sanity/lib/utils";
import { useEffect, useState } from "react";
import Hamburger from "./hamburger";

type NavProps = {
  menuItems: MenuItem[];
};

export default function NavLinksMobile({ menuItems }: NavProps) {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const onRoute = (href: string) => {
    if (pathname === href) {
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);

  return (
    <div className="relative z-40">
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
          className=" relative z-50 h-8 w-8 pb-1 text-3xl leading-[8px]"
          onClick={toggleMenu}
        >
          x
        </button>
      )}
      <div
        className={`flex h-[80dvh] w-full flex-col justify-end gap-4  bg-gray-100 pb-24 pl-4 pt-24 text-4xl lg:pl-8`}
        style={
          openMenu
            ? { display: "flex", position: "fixed", top: 0, left: 0 }
            : { display: "none", position: "static" }
        }
      >
        {menuItems.map((setting) => {
          const href = resolveHref(setting._type, setting.slug);

          console.log(href);

          if (!href) {
            return null;
          }

          return (
            <Link
              className={`${pathname === href ? "underline decoration-2 underline-offset-8" : ""}`}
              key={setting.title}
              href={href}
              onClick={() => onRoute(href)}
              prefetch={true}
            >
              {setting.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
