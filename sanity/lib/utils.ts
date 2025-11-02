export function resolveHref(hrefType: string, slug: string) {
  if (slug === "contact") {
    return "#contact"; // scrollt naar footer op dezelfde pagina
  }

  switch (hrefType) {
    case "homepage":
      return "/";
    case "page":
      return slug ? `/${slug}` : undefined;
    case "section":
      return slug ? `/#${slug}` : undefined;
    default:
      console.log("invalid document type");
      return undefined;
  }
}

export const formatDate = (
  dateString: string | undefined,
  options: Intl.DateTimeFormatOptions,
): string => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("nl-BE", options).format(date);
};
