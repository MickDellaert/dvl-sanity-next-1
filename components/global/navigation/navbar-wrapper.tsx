import { getSettings } from "@/sanity/lib/queryLoaders";
import NavbarContainer from "./navbar-container";

export default async function NavbarWrapper() {
  const settingsData = await getSettings();
  const menuItems = settingsData.menuItems;

  return (
    <div className="fixed top-0 w-full h-20 bg-white z-20">
      <NavbarContainer menuItems={menuItems} />
    </div>
  );
}
