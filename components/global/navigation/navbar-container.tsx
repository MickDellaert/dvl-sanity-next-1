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
    <div className="flex flex-row items-center justify-between pt-6 mx-4 sm:mx-8 lg:mx-16 pr-4 md:pr-0">
      <Logo />
      {/* {!isMobile && <NavLinks menuItems={menuItems} />}
      {isMobile && <NavLinksMobile menuItems={menuItems} />} */}
      <div className="hidden lg:block">
        <NavLinks menuItems={menuItems} />
      </div>
      <div className="block lg:hidden">
        <NavLinksMobile menuItems={menuItems} />
      </div>
    </div>
  );
}
