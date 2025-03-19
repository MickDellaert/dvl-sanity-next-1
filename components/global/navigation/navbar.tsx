import { getSettings } from "@/sanity/lib/queryLoaders";
import NavbarContainer from "./navbar-container";

export default async function Navbar() {
  const settingsData = await getSettings();
  const menuItems = settingsData.menuItems;

  return <NavbarContainer menuItems={menuItems} />;
}
