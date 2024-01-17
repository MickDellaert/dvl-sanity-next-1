import { getSettings } from "@/sanity/lib/queryLoaders";
import Link from "next/link";
import React from "react";

export default async function NavBar() {
  const settingsData = await getSettings();

  // console.log(settingsData.menuItems[0]._type);

  const hrefType = settingsData.menuItems[0]._type;
  const slug = settingsData.menuItems[0].slug;

  function resolveHref(hrefType: string, slug: string) {
    switch (hrefType) {
      case "homepage":
        return "/";
      case "page":
        return slug ? `${slug}` : undefined;
      default:
        console.log("invalid document type");
      // return undefined
    }
  }

  return (
    <div className="flex flex-row justify-between px-12">
      {settingsData.menuItems.map((setting) => {
        const href = resolveHref(setting._type, setting.slug);

        if (!href) {
          return null;
        }

        return (
          <Link href={href} key={setting.title}>
            {setting.title}
          </Link>
        );
      })}
    </div>
  );
}
