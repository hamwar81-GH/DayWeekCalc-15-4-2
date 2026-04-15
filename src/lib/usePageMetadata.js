import { useEffect } from "react";

function ensureMetaDescription() {
  let descriptionTag = document.querySelector('meta[name="description"]');

  if (!descriptionTag) {
    descriptionTag = document.createElement("meta");
    descriptionTag.setAttribute("name", "description");
    document.head.appendChild(descriptionTag);
  }

  return descriptionTag;
}

export function usePageMetadata({ title, description }) {
  useEffect(() => {
    document.title = title;
    ensureMetaDescription().setAttribute("content", description);
  }, [description, title]);
}
