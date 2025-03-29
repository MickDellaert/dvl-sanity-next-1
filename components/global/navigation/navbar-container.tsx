"use client";

import { MenuItem } from "@/sanity/types";
import NavbarLogo from "./navbar-logo";
// import NavMobile from "./navbar-mobile";
import NavbarLinks from "./navbar-links";
import NavbarLinksMobile from "./navbar-links-mobile";
import NavbarHamburger from "./navbar-hamburger";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

type NavProps = {
  menuItems: MenuItem[];
  homepageDescription: string;
};

export default function NavbarContainer({
  menuItems,
  homepageDescription,
}: NavProps) {
  const [hasMounted, setHasMounted] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const onRouteCheck = (href: string) => {
    if (pathname === href) {
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);

  if (!hasMounted) return null;
  return (
    <>
      <div
        className={`items-top fixed left-0 top-0 z-50 flex h-20 w-full flex-row justify-between px-x pt-6  md:px-8 md:pt-8 ${openMenu ? "" : "mix-blend-difference invert"}`}
      >
        <NavbarLogo homepageDescription={homepageDescription} />
        <div className="hidden lg:block">
          <NavbarLinks menuItems={menuItems} />
        </div>
        <div className="block lg:hidden">
          {/* <NavMobile
            menuItems={menuItems}
            openMenu={openMenu}
            pathname={pathname}
            onRouteCheckAction={onRouteCheck}
            toggleMenu={toggleMenu}
          /> */}

          <NavbarHamburger onClick={toggleMenu} openMenu={openMenu} />
          <NavbarLinksMobile
            openMenu={openMenu}
            pathname={pathname}
            onRouteCheckAction={onRouteCheck}
            menuItems={menuItems}
          />
        </div>
      </div>
    </>
  );
}
