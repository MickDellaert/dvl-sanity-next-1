"use client";

import { MenuItem } from "@/sanity/types";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import HamburgerButton from "./hamburgerButton";
import NavLinksMobileNew from "./navlinks-mobile";

type NavProps = {
  menuItems: MenuItem[];
};

export default function NavLinksMobile({ menuItems }: NavProps) {
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
      <HamburgerButton onClick={toggleMenu} openMenu={openMenu} />
      <NavLinksMobileNew
        openMenu={openMenu}
        pathname={pathname}
        onRouteCheckAction={onRouteCheck}
        menuItems={menuItems}
      />
    </>
  );
}
