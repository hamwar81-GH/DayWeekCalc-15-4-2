const DEFAULT_SITE_URL = "https://www.dayoftheweekcalculator.com/";

function normalizeSiteUrl(url) {
  try {
    const parsedUrl = new URL(url);
    parsedUrl.hash = "";

    if (!parsedUrl.pathname) {
      parsedUrl.pathname = "/";
    }

    if (!parsedUrl.pathname.endsWith("/")) {
      parsedUrl.pathname = `${parsedUrl.pathname}/`;
    }

    return parsedUrl.toString();
  } catch {
    return "https://www.dayoftheweekcalculator.com/";
  }
}

export const siteConfig = {
  siteName: "Day of the Week Calculator",
  siteUrl: normalizeSiteUrl(import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL),
  description:
    "Find the day of the week for any date instantly. Includes date differences, add/subtract tools, calendar view, and helpful date context.",
  logoPath: "/favicon.svg",
};

export function getSiteUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}
