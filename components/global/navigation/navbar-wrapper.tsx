import { getSettings } from "@/sanity/lib/queryLoaders";
import NavbarContainer from "./navbar-container";
import Hamburger from "./hamburger";

export default async function NavbarWrapper() {
  const settingsData = await getSettings();
  const menuItems = settingsData.menuItems;

  console.log(menuItems);

  return (
    // <nav className="fixed top-0 z-50 h-20 w-full bg-white">
    <nav className="fixed left-0 top-0 z-50 h-16 w-full px-4 pt-8 mix-blend-difference invert md:px-8">
      <NavbarContainer menuItems={menuItems} />
    </nav>
  );
}
