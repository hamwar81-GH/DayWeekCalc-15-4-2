import { ArrowRight } from "lucide-react";
import CallToActionSection from "./CallToActionSection";
import { usePageMetadata } from "../lib/usePageMetadata";

function LegalDocumentPage({
  title,
  description,
  eyebrow,
  canonicalPath,
  sections,
  highlights,
  icons,
  relatedLinks,
  cta,
}) {
  usePageMetadata({
    title: `${title} - Day of the Week Calculator`,
    description,
    canonicalPath,
  });

  const openCallToAction = () => {
    window.location.href = cta.href;
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
          <div className="glass mb-6 inline-flex items-center rounded-full border border-primary-500/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-400 animate-fade-in">
            {eyebrow}
          </div>

          <h1 className="font-display mb-6 text-5xl font-bold leading-tight text-white animate-fade-up sm:text-6xl lg:text-7xl">
            {title}
          </h1>

          <p
            className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400 animate-fade-up sm:text-xl"
            style={{ animationDelay: "0.1s" }}
          >
            {description}
          </p>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.7fr_1fr]">
          <div className="space-y-6">
            {sections.map((section) => (
              <article key={section.title} className="card p-8">
                <h2 className="font-display mb-4 text-2xl font-bold text-white">{section.title}</h2>
                <p className="text-sm leading-7 text-slate-400">{section.content}</p>
              </article>
            ))}
          </div>

          <div className="space-y-6">
            <div className="card p-6">
              <h2 className="font-display mb-5 text-xl font-bold text-white">Key Points</h2>
              <div className="space-y-5">
                {highlights.map((item, index) => {
                  const Icon = icons[index];

                  return (
                    <div key={item.title} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-primary-500/20 bg-gradient-to-br from-primary-500/20 to-accent-500/20">
                        <Icon size={20} className="text-primary-400" />
                      </div>
                      <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-500">{item.content}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="card p-6">
              <h2 className="font-display mb-5 text-xl font-bold text-white">Related Legal Pages</h2>
              <div className="space-y-3">
                {relatedLinks.map((link) => (
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
            </div>
          </div>
        </div>
      </section>

      <CallToActionSection
        title={cta.title}
        subtitle={cta.subtitle}
        buttonLabel={cta.buttonLabel}
        onClick={openCallToAction}
      />
    </main>
  );
}

export default LegalDocumentPage;
