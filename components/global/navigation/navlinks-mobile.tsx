"use client";

import { MenuItem } from "@/sanity/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { resolveHref } from "@/sanity/lib/utils";
import { useEffect, useState } from "react";
import Hamburger from "./hamburger";
import HamburgerButton from "./hamburgerButton";
import { motion } from "framer-motion";

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
      {/* {!openMenu && (
        // <button className="relative top-1 z-50 w-8" onClick={toggleMenu}>
        //   <Hamburger />
        // </button>
        <HamburgerButton onClick={toggleMenu} />
      )}
      {openMenu && (
        // <button
        //   className="relative z-50 h-8 w-8 pb-1 text-3xl leading-[8px]"
        //   onClick={toggleMenu}
        // >
        //   x
        // </button>
        <HamburgerButton onClick={toggleMenu} />
      )} */}
      <HamburgerButton onClick={toggleMenu} openMenu={openMenu} />

      <motion.div
        className={`fixed left-0 top-0 z-40 flex h-[60svh] w-full flex-col justify-end bg-stone-200 px-6 pb-64 md:pb-64`}
        // style={
        //   openMenu
        //     ? { display: "flex", position: "fixed", top: 0, left: 0 }
        //     : { display: "none", position: "static" }
        // }
        animate={openMenu ? "open" : "closed"}
        variants={{ open: { opacity: 100 }, closed: { opacity: 0 } }}
      >
        <div
          className="relative mt-16 flex flex-col gap-y-3 pt-8 text-3xl"
          // before:absolute before:left-0 before:top-0 before:h-[4px] before:w-16 before:bg-black before:content-['']"
        >
          {menuItems.map((setting) => {
            const href = resolveHref(setting._type, setting.slug);

            // console.log(href);

            if (!href) {
              return null;
            }

            return (
              <Link
                //   className={`${pathname === href || pathname.includes(href) ? "bg-white underline decoration-2 underline-offset-8 mix-blend-difference invert" : ""}
                // decoration-2 underline-offset-8 hover:bg-white hover:underline hover:mix-blend-difference hover:invert`}

                className={`${pathname === href || pathname.includes(href) ? "text-gray-500" : ""} 
              hover:text-black`}
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
      </motion.div>
    </div>
  );
}
