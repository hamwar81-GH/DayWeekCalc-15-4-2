import { ArrowRight, BookOpen, Sparkles } from "lucide-react";

function HeroSection({
  badge,
  titlePrefix,
  titleAccent,
  subtitle,
  primaryLabel,
  secondaryLabel,
  onPrimaryClick,
  secondaryHref = "#learn-more",
}) {
  return (
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
          <span>{badge}</span>
        </div>

        <h1 className="font-display mb-6 text-5xl font-bold leading-tight text-white animate-fade-up sm:text-6xl lg:text-7xl">
          {titlePrefix} <span className="gradient-text">{titleAccent}</span>
        </h1>

        <p
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-400 animate-fade-up sm:text-xl"
          style={{ animationDelay: "0.1s" }}
        >
          {subtitle}
        </p>

        <div
          className="flex flex-col items-center justify-center gap-4 animate-fade-up sm:flex-row"
          style={{ animationDelay: "0.2s" }}
        >
          <button type="button" onClick={onPrimaryClick} className="btn-primary">
            <Sparkles size={18} />
            {primaryLabel}
            <ArrowRight size={16} />
          </button>

          <a href={secondaryHref} className="btn-secondary">
            <BookOpen size={18} />
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
