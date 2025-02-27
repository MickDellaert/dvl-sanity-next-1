import { getSettings } from "@/sanity/lib/queryLoaders";
import NavbarContainer from "./navbar-container";
import Hamburger from "./hamburger";

export default async function NavbarWrapper() {
  const settingsData = await getSettings();
  const menuItems = settingsData.menuItems;

  return (
    // <nav className="fixed top-0 z-50 h-20 w-full bg-white">
    <nav className="px-x fixed left-0 right-6 top-0 z-50 h-16 w-full pr-[6%] pt-6 mix-blend-difference invert md:px-8 md:pt-8">
      <NavbarContainer menuItems={menuItems} />
    </nav>
  );
}
