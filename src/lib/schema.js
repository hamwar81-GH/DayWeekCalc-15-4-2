import { ABOUT_CONTACT } from "./aboutContent";
import { HEADER_LINKS } from "./content";
import { getSiteUrl, siteConfig } from "./siteConfig";

function resolveNavigationUrl(href, currentPath) {
  if (href.startsWith("#")) {
    return new URL(href, getSiteUrl(currentPath)).toString();
  }

  return getSiteUrl(href);
}

export function serializeJsonLd(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function buildOrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    email: ABOUT_CONTACT.email,
  };

  if (siteConfig.logoPath) {
    schema.logo = getSiteUrl(siteConfig.logoPath);
  }

  return schema;
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
  };
}

export function buildSiteNavigationSchema(currentPath = "/") {
  return HEADER_LINKS.map((link) => ({
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: link.label,
    url: resolveNavigationUrl(link.href, currentPath),
  }));
}

export function buildSiteSchemaGraph(currentPath = "/") {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganizationSchema(),
      buildWebSiteSchema(),
      ...buildSiteNavigationSchema(currentPath),
    ],
  };
}
