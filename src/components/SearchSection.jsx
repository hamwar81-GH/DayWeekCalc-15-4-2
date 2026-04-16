import { Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

function normalizeSearchValue(value) {
  return value.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function getBestSearchMatch(query, targets) {
  const normalizedQuery = normalizeSearchValue(query);

  if (!normalizedQuery) {
    return null;
  }

  return (
    targets.find((target) => {
      const normalizedLabel = normalizeSearchValue(target.label);
      const keywords = target.keywords.map(normalizeSearchValue);

      return (
        normalizedLabel.includes(normalizedQuery) ||
        normalizedQuery.includes(normalizedLabel) ||
        keywords.some((keyword) => keyword.includes(normalizedQuery) || normalizedQuery.includes(keyword))
      );
    }) || null
  );
}

function SearchSection({ id, title, subtitle, targets }) {
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");
  const suggestions = useMemo(() => targets.slice(0, 6), [targets]);

  const navigateToMatch = (rawQuery) => {
    const match = getBestSearchMatch(rawQuery, targets);

    if (!match) {
      setMessage("No direct match found yet. Try calculator, FAQ, trivia, about us, or privacy policy.");
      return;
    }

    setMessage(`Opening ${match.label}.`);
    window.location.href = match.href;
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get("q");

    if (searchQuery) {
      setQuery(searchQuery);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigateToMatch(query);
  };

  return (
    <section id={id} className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="card p-6 sm:p-8">
          <div className="mb-8 text-center">
            <h2 className="section-title mb-4">{title}</h2>
            <p className="section-subtitle mx-auto max-w-2xl">{subtitle}</p>
          </div>

          <form
            role="search"
            aria-label="Site search"
            className="flex flex-col gap-3 sm:flex-row"
            onSubmit={handleSubmit}
          >
            <label htmlFor="site-search" className="sr-only">
              Search the site
            </label>
            <div className="relative flex-1">
              <Search
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />
              <input
                id="site-search"
                name="q"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="input-field pl-11"
                placeholder="Search calculator, FAQ, trivia, about us, contact us..."
                autoComplete="off"
              />
            </div>
            <button type="submit" className="btn-primary justify-center px-6 sm:px-8">
              <Search size={18} />
              Search
            </button>
          </form>

          <div className="mt-4 flex flex-wrap gap-2">
            {suggestions.map((target) => (
              <button
                key={target.label}
                type="button"
                onClick={() => navigateToMatch(target.label)}
                className="rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-400 transition-all duration-200 hover:border-white/[0.16] hover:bg-white/[0.08] hover:text-white"
              >
                {target.label}
              </button>
            ))}
          </div>

          <p className="mt-4 text-sm text-slate-500">{message || "Try a section name, page, or tool to jump there."}</p>
        </div>
      </div>
    </section>
  );
}

export default SearchSection;
