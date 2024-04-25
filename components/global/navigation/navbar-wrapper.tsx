import { getSettings } from "@/sanity/lib/queryLoaders";
import NavbarContainer from "./navbar-container";
import Hamburger from "./hamburger";

export default async function NavbarWrapper() {
  const settingsData = await getSettings();
  const menuItems = settingsData.menuItems;

  return (
    <nav className="fixed top-0 z-50 h-20 w-full bg-white">
      <NavbarContainer menuItems={menuItems} />
    </nav>
  );
}
