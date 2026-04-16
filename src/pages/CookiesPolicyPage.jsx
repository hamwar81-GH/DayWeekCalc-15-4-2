import LegalDocumentPage from "../components/LegalDocumentPage";
import { LEGAL_PAGE_CONTENT } from "../lib/legalContent";

function CookiesPolicyPage() {
  const content = LEGAL_PAGE_CONTENT["/cookies-policy"];

  return (
    <LegalDocumentPage
      title={content.title}
      description={content.description}
      eyebrow={content.eyebrow}
      canonicalPath="/cookies-policy"
      sections={content.sections}
      highlights={content.highlights}
      icons={content.icons}
      relatedLinks={content.relatedLinks}
      cta={{
        title: content.ctaTitle,
        subtitle: content.ctaSubtitle,
        buttonLabel: content.ctaButtonLabel,
        href: content.ctaHref,
      }}
    />
  );
}

export default CookiesPolicyPage;
