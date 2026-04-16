import { Cookie, FileText, Lock, Mail, Scale, ShieldCheck } from "lucide-react";
import { ABOUT_CONTACT } from "./aboutContent";
import { LEGAL_LINKS } from "./content";

const openCalculatorHref = "/#homepage-calculator";

function getRelatedLinks(currentRoute) {
  return LEGAL_LINKS.filter((link) => link.href !== currentRoute);
}

export const LEGAL_PAGE_CONTENT = {
  "/privacy-policy": {
    title: "Privacy Policy",
    eyebrow: "Privacy and data handling",
    description:
      "This page explains what information Day of the Week Calculator may receive, how it is used, and the choices visitors have when using the site.",
    sections: [
      {
        title: "What this policy covers",
        content:
          "Day of the Week Calculator is designed as a straightforward online date utility. This Privacy Policy explains how information may be handled when you browse the site, use the calculator tools, or contact the team.",
      },
      {
        title: "Calculator inputs",
        content:
          "The date values entered into the calculator tools are used to generate results in the browser experience. We do not present the calculator as an account-based product, and the site is designed to answer weekday and date questions without requiring a user profile.",
      },
      {
        title: "Information you choose to share",
        content:
          `If you contact the team by email at ${ABOUT_CONTACT.email}, we may receive your name, email address, and the contents of your message so we can respond to your question or feedback.`,
      },
      {
        title: "Technical request data",
        content:
          "Like most websites, basic technical details may be processed when a page is requested so the site can load securely and reliably. This can include request timestamps, browser details, referring pages, and IP-address-related network data handled by infrastructure providers.",
      },
      {
        title: "How information may be used",
        content:
          "Information may be used to operate the site, troubleshoot problems, respond to messages, improve reliability, and understand whether the calculator experience is working as expected for visitors.",
      },
      {
        title: "Retention and sharing",
        content:
          "We do not describe the calculator as a service that stores personal profiles or builds user accounts. Messages sent by email may be retained for follow-up, support, and record-keeping. We do not sell personal information through the calculator experience.",
      },
    ],
    highlights: [
      {
        title: "No account required",
        content: "Visitors can use the core date tools without creating an account or signing in.",
      },
      {
        title: "Direct contact only",
        content: "The clearest personal information path in the project is the published contact email.",
      },
      {
        title: "Utility-focused experience",
        content: "The site is built to answer date questions quickly rather than collect extensive profile data.",
      },
    ],
    icons: [Lock, Mail, ShieldCheck],
    relatedLinks: getRelatedLinks("/privacy-policy"),
    ctaTitle: "Need a date answer instead?",
    ctaSubtitle:
      "Return to the calculator to check a weekday, compare dates, or move forward and backward in time.",
    ctaButtonLabel: "Open the Calculator",
    ctaHref: openCalculatorHref,
  },
  "/terms-of-use": {
    title: "Terms of Use",
    eyebrow: "Site use and responsibilities",
    description:
      "These Terms of Use explain the basic rules for using Day of the Week Calculator and the expectations around the site content and tools.",
    sections: [
      {
        title: "Using the site",
        content:
          "Day of the Week Calculator is provided as an informational online utility for weekday lookup, date comparison, and date offset calculations. By using the site, you agree to use it in a lawful and respectful way.",
      },
      {
        title: "Accuracy and availability",
        content:
          "We aim to provide helpful and dependable date calculations, but no online tool can promise uninterrupted availability in every circumstance. You should verify important dates independently when the result affects legal, financial, medical, or other high-stakes decisions.",
      },
      {
        title: "Acceptable use",
        content:
          "You agree not to misuse the site, interfere with normal operation, attempt unauthorized access, or use the service in a way that harms the experience for other visitors or the underlying infrastructure.",
      },
      {
        title: "Content and ownership",
        content:
          "The site design, written copy, calculator experience, and related branding remain part of the Day of the Week Calculator project. Limited personal and non-commercial use of the public site is allowed, but copying or republishing substantial parts of the experience without permission is not.",
      },
      {
        title: "External links and services",
        content:
          "Some pages may link to outside resources or email contact methods for convenience. External destinations operate under their own terms and policies, and we are not responsible for their independent practices.",
      },
      {
        title: "Changes to the terms",
        content:
          "These terms may be updated as the site evolves. Continued use of the site after updates means you are using the latest published version of these terms.",
      },
    ],
    highlights: [
      {
        title: "Practical utility",
        content: "The tools are intended to help with planning, learning, and everyday date questions.",
      },
      {
        title: "Use good judgment",
        content: "Important decisions should still be checked against authoritative sources when needed.",
      },
      {
        title: "Respect the service",
        content: "Normal browsing and tool usage are welcome; misuse and interference are not.",
      },
    ],
    icons: [Scale, ShieldCheck, FileText],
    relatedLinks: getRelatedLinks("/terms-of-use"),
    ctaTitle: "Ready to use the date tools?",
    ctaSubtitle:
      "Jump back into the calculator suite to check a weekday, compare two dates, or explore date offsets.",
    ctaButtonLabel: "Try the Calculator",
    ctaHref: openCalculatorHref,
  },
  "/cookies-policy": {
    title: "Cookies Policy",
    eyebrow: "Cookies and similar technologies",
    description:
      "This page explains how Day of the Week Calculator approaches cookies and similar browser technologies in the context of a simple online date tool.",
    sections: [
      {
        title: "What cookies are",
        content:
          "Cookies are small pieces of data that websites or supporting services can place in a browser to remember preferences, support security, or understand how a service is being used.",
      },
      {
        title: "How this site is designed",
        content:
          "Day of the Week Calculator is built as a lightweight browser-based experience for date calculations. The visible project code does not present the calculator as a sign-in, shopping, or membership product that depends on account cookies to function.",
      },
      {
        title: "Technical service cookies",
        content:
          "Even when a site keeps its own experience simple, hosting platforms, browsers, or embedded third-party resources may still use technical cookies or similar mechanisms to serve content securely, prevent abuse, or improve delivery performance.",
      },
      {
        title: "Preference controls",
        content:
          "Most browsers let you review, limit, or delete cookies through privacy settings. If you block all cookies, some web features provided by browsers or third parties may behave differently.",
      },
      {
        title: "Third-party resources",
        content:
          "When the site relies on external resources or you follow links away from the site, those third parties may apply their own cookie or storage practices under their own policies.",
      },
      {
        title: "Questions about cookies",
        content:
          `If you want to ask about site operation or privacy-related practices, you can contact the team at ${ABOUT_CONTACT.email}.`,
      },
    ],
    highlights: [
      {
        title: "Lightweight by design",
        content: "The calculator experience is intentionally simple and does not center on account-based tracking.",
      },
      {
        title: "Browser controls matter",
        content: "Visitors can manage cookie behavior through their own browser privacy settings.",
      },
      {
        title: "Third parties have their own rules",
        content: "External resources and platforms may apply separate policies outside the site itself.",
      },
    ],
    icons: [Cookie, ShieldCheck, Mail],
    relatedLinks: getRelatedLinks("/cookies-policy"),
    ctaTitle: "Back to the calculator",
    ctaSubtitle:
      "Use the main tools to look up weekdays, compare dates, and explore date offsets without extra steps.",
    ctaButtonLabel: "Go to Calculator",
    ctaHref: openCalculatorHref,
  },
};
