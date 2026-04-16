import { ArrowRight, BookOpen, CalendarDays, Clock3, Sparkles } from "lucide-react";
import CallToActionSection from "../components/CallToActionSection";
import { BLOG_CTA, BLOG_HERO, BLOG_POSTS } from "../lib/blogContent";
import { usePageMetadata } from "../lib/usePageMetadata";

const BLOG_ICONS = {
  clock: Clock3,
  calendar: CalendarDays,
  book: BookOpen,
};

function BlogPage() {
  usePageMetadata({
    title: "Blog - Day of the Week Calculator",
    description:
      "Read practical blog articles about ISO 8601, the Gregorian calendar, and the history behind weekday names on Day of the Week Calculator.",
    canonicalPath: "/blog",
  });

  const openCalculator = () => {
    window.location.href = BLOG_CTA.href;
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
            <span>{BLOG_HERO.badge}</span>
          </div>

          <h1 className="font-display mb-6 text-5xl font-bold leading-tight text-white animate-fade-up sm:text-6xl lg:text-7xl">
            {BLOG_HERO.title} <span className="gradient-text">{BLOG_HERO.accent}</span>
          </h1>

          <p
            className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400 animate-fade-up sm:text-xl"
            style={{ animationDelay: "0.1s" }}
          >
            {BLOG_HERO.subtitle}
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="section-title mb-4">Featured Reads</h2>
            <p className="section-subtitle mx-auto max-w-2xl">
              Short, practical articles built around the same weekday and calendar topics that power the tool itself.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {BLOG_POSTS.map((post, index) => {
              const Icon = BLOG_ICONS[post.icon];

              return (
                <a
                  key={post.id}
                  href={`#${post.id}`}
                  className="card-hover group block p-8 animate-fade-up"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl border border-primary-500/20 bg-gradient-to-br from-primary-500/20 to-accent-500/20 shadow-glow transition-transform duration-300 group-hover:scale-105">
                    <Icon size={22} className="text-primary-400" />
                  </div>

                  <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary-300">
                    <span>{post.category}</span>
                    <span className="h-1 w-1 rounded-full bg-primary-400/70" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-display mb-5 text-3xl font-bold leading-tight text-white">{post.title}</h3>
                  <p className="mb-8 text-lg leading-relaxed text-slate-500">{post.excerpt}</p>

                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-300 transition-colors duration-200 group-hover:text-primary-200">
                    Read article
                    <ArrowRight size={15} />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-transparent via-primary-950/10 to-transparent px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-6">
          {BLOG_POSTS.map((post, index) => (
            <article
              key={post.id}
              id={post.id}
              className="card scroll-mt-28 p-8 animate-fade-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary-300">
                <span>{post.category}</span>
                <span className="h-1 w-1 rounded-full bg-primary-400/70" />
                <span>{post.readTime}</span>
              </div>

              <h2 className="font-display mb-5 text-3xl font-bold text-white">{post.title}</h2>
              <p className="mb-5 text-base leading-8 text-slate-400">{post.detail}</p>

              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white">Why It Matters Here</p>
                <p className="mt-3 text-sm leading-7 text-slate-500">{post.takeaway}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CallToActionSection
        title={BLOG_CTA.title}
        subtitle={BLOG_CTA.subtitle}
        buttonLabel={BLOG_CTA.buttonLabel}
        onClick={openCalculator}
      />
    </main>
  );
}

export default BlogPage;
