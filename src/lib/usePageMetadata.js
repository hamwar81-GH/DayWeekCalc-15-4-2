import { useEffect } from "react";
import { getSiteUrl } from "./siteConfig";

function ensureMetaDescription() {
  let descriptionTag = document.querySelector('meta[name="description"]');

  if (!descriptionTag) {
    descriptionTag = document.createElement("meta");
    descriptionTag.setAttribute("name", "description");
    document.head.appendChild(descriptionTag);
  }

  return descriptionTag;
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
    document.title = title;
    ensureMetaDescription().setAttribute("content", description);
    ensureCanonicalLink().setAttribute("href", getSiteUrl(canonicalPath));
  }, [canonicalPath, description, title]);
}
