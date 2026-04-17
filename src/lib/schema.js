import { ABOUT_CONTACT } from "./aboutContent";
import { HEADER_LINKS, LEGAL_LINKS } from "./content";
import { getSiteUrl, siteConfig } from "./siteConfig";

function createSchemaId(fragment) {
  return new URL(fragment, siteConfig.siteUrl).toString();
}

function createPageSchemaId(path = "/") {
  return `${getSiteUrl(path)}#webpage`;
}

function slugifySchemaValue(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

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
    "@type": "Organization",
    "@id": createSchemaId("#organization"),
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    email: ABOUT_CONTACT.email,
  };

  if (siteConfig.logoPath) {
    schema.logo = {
      "@type": "ImageObject",
      "@id": createSchemaId("#logo"),
      url: getSiteUrl(siteConfig.logoPath),
      name: `${siteConfig.siteName} logo`,
    };
  }

  return schema;
}

export function buildWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": createSchemaId("#website"),
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    publisher: {
      "@id": createSchemaId("#organization"),
    },
    potentialAction: {
      "@type": "SearchAction",
      "@id": createSchemaId("#website-search"),
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.siteUrl}?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildWebPageSchema({ title, description, path = "/" }) {
  const pageUrl = getSiteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": createPageSchemaId(path),
    url: pageUrl,
    name: title,
    description,
    isPartOf: {
      "@id": createSchemaId("#website"),
    },
    about: {
      "@id": createSchemaId("#organization"),
    },
    inLanguage: "en",
  };
}

export function buildFaqSchema(faqs = [], path = "/") {
  const pageUrl = getSiteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    url: pageUrl,
    name: `${siteConfig.siteName} Frequently Asked Questions`,
    isPartOf: {
      "@id": createPageSchemaId(path),
    },
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      "@id": `${pageUrl}#faq-question-${slugifySchemaValue(faq.question)}`,
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        "@id": `${pageUrl}#faq-answer-${slugifySchemaValue(faq.question)}`,
        text: faq.answer,
      },
    })),
  };
}

export function buildSiteNavigationSchema(currentPath = "/") {
  return [...HEADER_LINKS, ...LEGAL_LINKS].map((link) => ({
    "@type": "SiteNavigationElement",
    "@id": createSchemaId(`#navigation-${slugifySchemaValue(link.label)}`),
    name: link.label,
    url: resolveNavigationUrl(link.href, currentPath),
    isPartOf: {
      "@id": createSchemaId("#website"),
    },
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
