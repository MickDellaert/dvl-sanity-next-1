import { getSettings } from "@/sanity/lib/queryLoaders";
import NavbarContainer from "./navbar-container";

export default async function NavbarWrapper() {
  const settingsData = await getSettings();
  const menuItems = settingsData.menuItems;

  return (
    <div className="fixed top-0 w-full h-16 bg-white">
      <NavbarContainer menuItems={menuItems} />
    </div>
  );
}
