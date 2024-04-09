"use client";

import { useMediaQuery } from "react-responsive";
import { DeviceSize } from "./device-size";

import NavLinks from "./navlinks";
import NavLinksMobile from "./navlinks-mobile";
import { MenuItem } from "@/sanity/types";
import Logo from "./logo";

type NavProps = {
  menuItems: MenuItem[];
};

export default function NavbarContainer({ menuItems }: NavProps) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.lg });

  return (
    <div className="flex flex-row justify-between px-8 md:px-16 items-center pt-6">
      <Logo />
      {!isMobile && <NavLinks menuItems={menuItems} />}
      {isMobile && <NavLinksMobile menuItems={menuItems} />}
    </div>
  );
}