import {
  ArrowRight,
  BookOpen,
  CalendarClock,
  Clock3,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import CallToActionSection from "../components/CallToActionSection";
import InfoSection from "../components/InfoSection";
import {
  ABOUT_CONTACT,
  ABOUT_CTA,
  ABOUT_FEATURED_TOOLS,
  ABOUT_HERO,
  ABOUT_OVERVIEW,
  ABOUT_SOCIAL_PROOF,
  ABOUT_TEAM,
  ABOUT_TRUST_POINTS,
  ABOUT_WHAT_WE_DO,
} from "../lib/aboutContent";
import { usePageMetadata } from "../lib/usePageMetadata";

const OVERVIEW_ICONS = [Users, Clock3];
const WHAT_WE_DO_ICONS = [CalendarClock, BookOpen, Sparkles];

function AboutPage() {
  usePageMetadata({
    title: "About Us - Day of the Week Calculator",
    description:
      "Learn about Day of the Week Calculator, the team behind it, what the tool does, and why users trust it for fast and accurate date lookups.",
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
            <span>{ABOUT_HERO.badge}</span>
          </div>

          <h1 className="font-display mb-6 text-5xl font-bold leading-tight text-white animate-fade-up sm:text-6xl lg:text-7xl">
            {ABOUT_HERO.title} <span className="gradient-text">{ABOUT_HERO.accent}</span>
          </h1>

          <p
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-400 animate-fade-up sm:text-xl"
            style={{ animationDelay: "0.1s" }}
          >
            {ABOUT_HERO.subtitle}
          </p>

          <div
            className="flex flex-col items-center justify-center gap-4 animate-fade-up sm:flex-row"
            style={{ animationDelay: "0.2s" }}
          >
            <a href="/#homepage-calculator" className="btn-primary">
              <Sparkles size={18} />
              {ABOUT_HERO.primaryLabel}
              <ArrowRight size={16} />
            </a>

            <a href={ABOUT_HERO.secondaryHref} className="btn-secondary">
              <Mail size={18} />
              {ABOUT_HERO.secondaryLabel}
            </a>
          </div>
        </div>
      </section>

      <InfoSection
        id="about-overview"
        title="Built for Everyday Date Questions"
        subtitle="We focus on practical date utilities that help people get clear answers quickly without adding unnecessary complexity."
        sections={ABOUT_OVERVIEW}
        icons={OVERVIEW_ICONS}
      />

      <InfoSection
        id="what-we-do"
        title="What We Do"
        subtitle="Day of the Week Calculator exists to make date lookup, planning, and calendar reference more convenient for everyday users."
        sections={ABOUT_WHAT_WE_DO}
        icons={WHAT_WE_DO_ICONS}
      />

      <section className="border-y border-white/[0.06] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="section-title mb-4">Why Users Trust Us</h2>
            <p className="section-subtitle mx-auto max-w-2xl">
              We keep the experience centered on clarity, usefulness, and dependable date calculations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {ABOUT_TRUST_POINTS.map((point) => (
              <article key={point.title} className="card-hover p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-primary-500/20 bg-gradient-to-br from-primary-500/20 to-accent-500/20">
                  <ShieldCheck size={20} className="text-primary-400" />
                </div>
                <h3 className="font-display mb-3 text-lg font-bold text-white">{point.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{point.content}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="section-title mb-4">Meet the Team</h2>
            <p className="section-subtitle mx-auto max-w-2xl">
              Day of the Week Calculator is maintained like a focused utility product, with attention to the
              product experience, implementation quality, and on-page clarity.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {ABOUT_TEAM.map((member) => (
              <article key={member.name} className="card-hover p-6">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 font-display text-lg font-bold text-white shadow-glow">
                  {member.initials}
                </div>
                <h3 className="font-display text-lg font-bold text-white">{member.name}</h3>
                <p className="mb-3 text-sm font-medium text-primary-300">{member.role}</p>
                <p className="text-sm leading-relaxed text-slate-500">{member.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-transparent via-primary-950/10 to-transparent px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="section-title mb-4">How People Use the Tool</h2>
            <p className="section-subtitle mx-auto max-w-2xl">
              The product is built for everyday planning, learning, and quick date checks rather than bloated workflows.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {ABOUT_SOCIAL_PROOF.map((item) => (
              <article key={item.title} className="card p-6">
                <p className="mb-4 text-sm uppercase tracking-[0.24em] text-primary-300">{item.title}</p>
                <blockquote className="text-sm leading-relaxed text-slate-400">&quot;{item.quote}&quot;</blockquote>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="section-title mb-4">Featured Uses and Related Tools</h2>
            <p className="section-subtitle mx-auto max-w-2xl">
              Explore the core utilities already available on Day of the Week Calculator for planning, date
              reference, and quick weekday checks.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {ABOUT_FEATURED_TOOLS.map((tool) => (
              <a key={tool.title} href={tool.href} className="card-hover block p-6">
                <h3 className="font-display mb-3 text-lg font-bold text-white">{tool.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-slate-500">{tool.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-300">
                  Explore tool
                  <ArrowRight size={15} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur sm:p-10">
            <div className="mb-10 max-w-3xl">
              <h2 className="section-title mb-4">Contact and Business Presence</h2>
              <p className="section-subtitle">
                Day of the Week Calculator is an online-first utility platform built to be available wherever a
                reliable date reference is needed.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="card p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-primary-500/20 bg-gradient-to-br from-primary-500/20 to-accent-500/20">
                  <Mail size={20} className="text-primary-400" />
                </div>
                <h3 className="font-display mb-3 text-lg font-bold text-white">Email</h3>
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
                  <MapPin size={20} className="text-primary-400" />
                </div>
                <h3 className="font-display mb-3 text-lg font-bold text-white">Availability</h3>
                <p className="text-sm font-semibold text-primary-300">{ABOUT_CONTACT.availability}</p>
                <p className="mb-3 text-sm font-semibold text-primary-300">{ABOUT_CONTACT.coverage}</p>
                <p className="text-sm leading-relaxed text-slate-500">
                  The tool is designed for general online use, with a focus on practical access for visitors around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToActionSection
        title={ABOUT_CTA.title}
        subtitle={ABOUT_CTA.subtitle}
        buttonLabel={ABOUT_CTA.buttonLabel}
        onClick={openCalculator}
      />
    </main>
  );
}

export default AboutPage;
