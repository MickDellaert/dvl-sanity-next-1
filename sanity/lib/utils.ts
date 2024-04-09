

  export function resolveHref(hrefType: string, slug: string) {
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
