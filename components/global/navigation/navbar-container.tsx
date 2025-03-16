"use client";

import NavLinks from "./navlinks";
import { MenuItem } from "@/sanity/types";
import Logo from "./logo";
import NavMobile from "./nav-mobile";

type NavProps = {
  menuItems: MenuItem[];
};

export default function NavbarContainer({ menuItems }: NavProps) {
  return (
    <div className="items-top fixed left-0 top-0 z-50 flex h-20 w-full flex-row justify-between px-x pt-6 md:px-8 md:pt-8">
      <Logo />

      <div className="hidden lg:block">
        <NavLinks menuItems={menuItems} />
      </div>
      <div className="block lg:hidden ">
        <NavMobile menuItems={menuItems} />
      </div>
    </div>
  );
}
