import { ArrowRight, Clock3, Mail, MessageSquare, Sparkles } from "lucide-react";
import CallToActionSection from "../components/CallToActionSection";
import InfoSection from "../components/InfoSection";
import { ABOUT_CONTACT } from "../lib/aboutContent";
import {
  CONTACT_CTA,
  CONTACT_HERO,
  CONTACT_REASONS,
  CONTACT_SUPPORT_DETAILS,
  CONTACT_TIPS,
} from "../lib/contactContent";
import { usePageMetadata } from "../lib/usePageMetadata";

const CONTACT_REASON_ICONS = [MessageSquare, Sparkles, Mail];
const CONTACT_DETAIL_ICONS = [Mail, Clock3, MessageSquare];

function ContactPage() {
  usePageMetadata({
    title: "Contact Us - Day of the Week Calculator",
    description:
      "Contact Day of the Week Calculator for questions, feedback, partnership inquiries, and other site-related messages.",
    canonicalPath: "/contact-us",
  });

  const openCalculator = () => {
    window.location.href = "/#homepage-calculator";
  };

  return (
    <main className="flex-1">
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-72 w-72 animate-float rounded-full bg-primary-600/20 blur-3xl" />
          <div
            className="absolute bottom-1/4 right-1/4 h-56 w-56 animate-float rounded-full bg-accent-500/15 blur-3xl"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full border border-primary-500/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-400 animate-fade-in">
            <Sparkles size={12} />
            <span>{CONTACT_HERO.badge}</span>
          </div>

          <h1 className="font-display mb-6 text-5xl font-bold leading-tight text-white animate-fade-up sm:text-6xl lg:text-7xl">
            {CONTACT_HERO.title} <span className="gradient-text">{CONTACT_HERO.accent}</span>
          </h1>

          <p
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-400 animate-fade-up sm:text-xl"
            style={{ animationDelay: "0.1s" }}
          >
            {CONTACT_HERO.subtitle}
          </p>

          <div
            className="flex flex-col items-center justify-center gap-4 animate-fade-up sm:flex-row"
            style={{ animationDelay: "0.2s" }}
          >
            <a href={CONTACT_HERO.primaryHref} className="btn-primary">
              <Mail size={18} />
              {CONTACT_HERO.primaryLabel}
              <ArrowRight size={16} />
            </a>

            <a href={CONTACT_HERO.secondaryHref} className="btn-secondary">
              <Sparkles size={18} />
              {CONTACT_HERO.secondaryLabel}
            </a>
          </div>
        </div>
      </section>

      <InfoSection
        id="contact-reasons"
        title="Why People Reach Out"
        subtitle="The project is built for practical date questions, so most contact starts with a specific need, suggestion, or partnership idea."
        sections={CONTACT_REASONS}
        icons={CONTACT_REASON_ICONS}
      />

      <InfoSection
        id="contact-details"
        title="How to Get in Touch"
        subtitle="The site keeps communication simple with a single main contact channel and a clear focus on site-related questions."
        sections={CONTACT_SUPPORT_DETAILS}
        icons={CONTACT_DETAIL_ICONS}
      />

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="section-title mb-4">Contact Details</h2>
            <p className="section-subtitle mx-auto max-w-2xl">
              Day of the Week Calculator is an online-first tool, and email is the primary way to contact the team.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="card p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-primary-500/20 bg-gradient-to-br from-primary-500/20 to-accent-500/20">
                <Mail size={20} className="text-primary-400" />
              </div>
              <h3 className="font-display mb-3 text-lg font-bold text-white">Email the Team</h3>
              <a
                href={`mailto:${ABOUT_CONTACT.email}`}
                className="mb-3 inline-flex text-sm font-semibold text-primary-300 transition-colors duration-200 hover:text-primary-200"
              >
                {ABOUT_CONTACT.email}
              </a>
              <p className="text-sm leading-relaxed text-slate-500">{ABOUT_CONTACT.response}</p>
            </div>

            <div className="card p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-primary-500/20 bg-gradient-to-br from-primary-500/20 to-accent-500/20">
                <Clock3 size={20} className="text-primary-400" />
              </div>
              <h3 className="font-display mb-3 text-lg font-bold text-white">Availability</h3>
              <p className="text-sm font-semibold text-primary-300">{ABOUT_CONTACT.availability}</p>
              <p className="mb-3 text-sm font-semibold text-primary-300">{ABOUT_CONTACT.coverage}</p>
              <p className="text-sm leading-relaxed text-slate-500">
                The team focuses on practical product communication related to the calculator experience and online site use.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-transparent via-primary-950/10 to-transparent px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="section-title mb-4">Helpful Tips Before You Send a Message</h2>
            <p className="section-subtitle mx-auto max-w-2xl">
              A little context makes it easier to review feedback and respond to the right question quickly.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {CONTACT_TIPS.map((tip) => (
              <article key={tip.title} className="card p-6">
                <p className="mb-4 text-sm uppercase tracking-[0.24em] text-primary-300">{tip.title}</p>
                <p className="text-sm leading-relaxed text-slate-400">{tip.content}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CallToActionSection
        title={CONTACT_CTA.title}
        subtitle={CONTACT_CTA.subtitle}
        buttonLabel={CONTACT_CTA.buttonLabel}
        onClick={openCalculator}
      />
    </main>
  );
}

export default ContactPage;
