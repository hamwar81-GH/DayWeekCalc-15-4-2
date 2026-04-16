import { ArrowRight, Map, Sparkles } from "lucide-react";
import { HTML_SITEMAP_GROUPS } from "../lib/content";
import { usePageMetadata } from "../lib/usePageMetadata";

function HtmlSitemapPage() {
  usePageMetadata({
    title: "HTML Sitemap - Day of the Week Calculator",
    description:
      "Browse the main pages, calculator sections, and legal pages available on Day of the Week Calculator from one organized sitemap page.",
    canonicalPath: "/html-sitemap",
  });

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
            <span>Browse the Site</span>
          </div>

          <h1 className="font-display mb-6 text-5xl font-bold leading-tight text-white animate-fade-up sm:text-6xl lg:text-7xl">
            HTML <span className="gradient-text">Sitemap</span>
          </h1>

          <p
            className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400 animate-fade-up sm:text-xl"
            style={{ animationDelay: "0.1s" }}
          >
            Use this page to quickly browse the main tools, learning sections, and important site pages available on
            Day of the Week Calculator.
          </p>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {HTML_SITEMAP_GROUPS.map((group) => (
            <article key={group.title} className="card p-6">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-primary-500/20 bg-gradient-to-br from-primary-500/20 to-accent-500/20">
                <Map size={20} className="text-primary-400" />
              </div>
              <h2 className="font-display mb-5 text-xl font-bold text-white">{group.title}</h2>
              <div className="space-y-3">
                {group.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-4 text-sm font-medium text-slate-300 transition-colors duration-200 hover:bg-white/[0.04] hover:text-white"
                  >
                    <span>{link.label}</span>
                    <ArrowRight size={16} />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default HtmlSitemapPage;
