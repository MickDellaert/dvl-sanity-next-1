"use client";

import { useMediaQuery } from "react-responsive";
import { DeviceSize } from "./device-size";

import NavLinks from "./navlinks";
import NavLinksMobile from "./navlinks-mobile";
import { MenuItem } from "@/sanity/types";
import Logo from "./logo";
import HamburgerButton from "./hamburgerButton";

type NavProps = {
  menuItems: MenuItem[];
};

export default function NavbarContainer({ menuItems }: NavProps) {
  // const isMobile = useMediaQuery({ maxWidth: DeviceSize.lg });

  return (
    // <div className="flex flex-row items-center justify-between pt-6 mx-auto sm:mx-8 lg:mx-16 md:pr-0 w-[90%] sm:pr-0">
    // <div className="items-top mx-auto flex w-[98%] flex-row justify-between pt-6 sm:pr-0">
    <div className="items-top fixed left-0 top-0 z-50 flex h-20 w-full flex-row justify-between px-x pt-8 md:px-8">
      <Logo />
      {/* {!isMobile && <NavLinks menuItems={menuItems} />}
      {isMobile && <NavLinksMobile menuItems={menuItems} />} */}
      {/* <div className="hidden lg:block">
        <NavLinks menuItems={menuItems} />
      </div> */}
      <div className="block lg:hidden ">
        <NavLinksMobile menuItems={menuItems} />
      </div>
      {/* <HamburgerButton /> */}
    </div>
  );
}
