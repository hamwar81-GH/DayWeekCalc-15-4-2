import { useEffect } from "react";
import { getSiteUrl, siteConfig } from "./siteConfig";

function ensureMetaTag(selector, attributes) {
  let tag = document.querySelector(selector);

  if (!tag) {
    tag = document.createElement("meta");
    Object.entries(attributes).forEach(([key, value]) => {
      tag.setAttribute(key, value);
    });
    document.head.appendChild(tag);
  }

  return tag;
}

function ensureCanonicalLink() {
  let canonicalLink = document.querySelector('link[rel="canonical"]');

  if (!canonicalLink) {
    canonicalLink = document.createElement("link");
    canonicalLink.setAttribute("rel", "canonical");
    document.head.appendChild(canonicalLink);
  }

  return canonicalLink;
}

export function usePageMetadata({ title, description, canonicalPath = "/" }) {
  useEffect(() => {
    const canonicalUrl = getSiteUrl(canonicalPath);

    document.title = title;
    ensureMetaTag('meta[name="description"]', { name: "description" }).setAttribute("content", description);
    ensureCanonicalLink().setAttribute("href", canonicalUrl);
    ensureMetaTag('meta[property="og:title"]', { property: "og:title" }).setAttribute("content", title);
    ensureMetaTag('meta[property="og:description"]', { property: "og:description" }).setAttribute(
      "content",
      description,
    );
    ensureMetaTag('meta[property="og:url"]', { property: "og:url" }).setAttribute("content", canonicalUrl);
    ensureMetaTag('meta[property="og:type"]', { property: "og:type" }).setAttribute("content", "website");
    ensureMetaTag('meta[property="og:site_name"]', { property: "og:site_name" }).setAttribute(
      "content",
      siteConfig.siteName,
    );
    ensureMetaTag('meta[property="og:image"]', { property: "og:image" }).setAttribute(
      "content",
      getSiteUrl(siteConfig.logoPath),
    );
    ensureMetaTag('meta[name="twitter:card"]', { name: "twitter:card" }).setAttribute("content", "summary");
    ensureMetaTag('meta[name="twitter:title"]', { name: "twitter:title" }).setAttribute("content", title);
    ensureMetaTag('meta[name="twitter:description"]', { name: "twitter:description" }).setAttribute(
      "content",
      description,
    );
  }, [canonicalPath, description, title]);
}
