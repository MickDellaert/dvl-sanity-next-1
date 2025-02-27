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
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
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

  if (!hasMounted) return null;

  return (
    <div className="">
      {!openMenu && (
        <button className="relative top-1 z-50 h-7 w-7" onClick={toggleMenu}>
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
        className={`flex h-[50svh] w-full flex-col justify-end bg-gray-100 px-4 pb-16`}
        style={
          openMenu
            ? { display: "flex", position: "fixed", top: 0, left: 0 }
            : { display: "none", position: "static" }
        }
      >
        <div className="relative mt-24 flex flex-col gap-y-4 pt-8 text-4xl before:absolute before:left-0 before:top-0 before:h-[4px] before:w-16 before:bg-black before:content-['']">
          {menuItems.map((setting) => {
            const href = resolveHref(setting._type, setting.slug);

            console.log(href);

            if (!href) {
              return null;
            }

            return (
              <Link
                className={`${pathname === href || pathname.includes(href) ? "bg-white underline decoration-2 underline-offset-8 mix-blend-difference invert" : ""} 
              decoration-2 underline-offset-8 hover:bg-white hover:underline hover:mix-blend-difference hover:invert`}
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
    </div>
  );
}
