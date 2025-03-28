"use client";

import { MenuItem } from "@/sanity/types";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NavbarHamburger from "./navbar-hamburger";
import NavLinksMobile from "./navbar-links-mobile";

type NavProps = {
  menuItems: MenuItem[];
  pathname: string;
  openMenu: boolean;
  onRouteCheckAction: (href: string) => void;
  toggleMenu: () => void;
};

export default function NavbarMobile({
  menuItems,
  toggleMenu,
  openMenu,
  onRouteCheckAction,
  pathname,
}: NavProps) {
  // const [hasMounted, setHasMounted] = useState(false);
  // const [openMenu, setOpenMenu] = useState(false);
  // const pathname = usePathname();

  // useEffect(() => {
  //   setHasMounted(true);
  // }, []);

  // const toggleMenu = () => {
  //   setOpenMenu(!openMenu);
  // };

  // const onRouteCheck = (href: string) => {
  //   if (pathname === href) {
  //     setOpenMenu(false);
  //   }
  // };

  // useEffect(() => {
  //   setOpenMenu(false);
  // }, [pathname]);

  // if (!hasMounted) return null;

  return (
    <>
      <NavbarHamburger onClick={toggleMenu} openMenu={openMenu} />
      <NavLinksMobile
        openMenu={openMenu}
        pathname={pathname}
        onRouteCheckAction={onRouteCheckAction}
        menuItems={menuItems}
      />
    </>
  );
}
