import { getSettings } from "@/sanity/lib/queryLoaders";
import Link from "next/link";
import React from "react";

export default async function NavBar() {
  const settingsData = await getSettings();

  // console.log(settingsData.menuItems[0]._type);

  // const hrefType = settingsData.menuItems[0]._type;
  // const slug = settingsData.menuItems[0].slug;

  const menuItems = settingsData.menuItems;

  // console.log(menuItems);

  function resolveHref(hrefType: string, slug: string) {
    switch (hrefType) {
      case "homepage":
        return "/";
      case "page":
        return slug ? `/${slug}` : undefined;
      default:
        console.log("invalid document type");
        return undefined;
    }
  }

  return (
    <div className="flex flex-row items-center justify-between gap-8 h-16">
      
      <Link href="/" className="text-2xl font-semibold uppercase tracking-widest">David Van Loon</Link>
      <div className=" text-lg font-medium uppercase tracking-widest flex gap-8">
        {menuItems.map((setting) => {
          const href = resolveHref(setting._type, setting.slug);

          if (!href) {
            return null;
          }

          return (
            <Link key={setting.title} href={href}>
              {setting.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
