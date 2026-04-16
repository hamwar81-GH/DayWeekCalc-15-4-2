import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { HEADER_LINKS, LEGAL_LINKS } from "../lib/content";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const legalMenuRef = useRef(null);
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const homeHref = currentPath === "/" ? "#" : "/";
  const calculatorHref = currentPath === "/" ? "#homepage-calculator" : "/#homepage-calculator";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!legalMenuRef.current?.contains(event.target)) {
        setIsLegalOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsLegalOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/[0.08] bg-dark-950/90 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href={homeHref}
            className="group flex items-center gap-2.5"
            aria-label="Day of the Week Calculator home"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 shadow-glow transition-shadow duration-300 group-hover:shadow-glow-lg">
              <img src="/favicon.svg" alt="Day of the Week Calculator logo" className="h-4 w-4" />
            </div>
            <span className="font-display text-lg font-bold leading-tight text-white">
              Day of the Week <span className="gradient-text">Calculator</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {HEADER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={link.route === currentPath ? "page" : undefined}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  link.route === currentPath
                    ? "bg-white/[0.08] text-white"
                    : "text-slate-400 hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="relative" ref={legalMenuRef}>
              <button
                type="button"
                onClick={() => setIsLegalOpen((current) => !current)}
                className="inline-flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-slate-400 transition-all duration-200 hover:bg-white/[0.05] hover:text-white"
                aria-expanded={isLegalOpen}
                aria-haspopup="menu"
              >
                <span>Legal</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${isLegalOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`absolute right-0 top-full mt-3 w-60 overflow-hidden rounded-2xl border border-white/[0.08] bg-dark-900/95 shadow-2xl backdrop-blur-xl transition-all duration-200 ${
                  isLegalOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-2 opacity-0"
                }`}
                role="menu"
                aria-label="Legal links"
              >
                {LEGAL_LINKS.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsLegalOpen(false)}
                    aria-current={link.route === currentPath ? "page" : undefined}
                    className={`block px-5 py-4 text-base font-medium text-slate-300 transition-colors duration-200 hover:bg-white/[0.04] hover:text-white ${
                      index < LEGAL_LINKS.length - 1 ? "border-b border-white/[0.06]" : ""
                    }`}
                    role="menuitem"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          <div className="hidden md:flex">
            <a href={calculatorHref} className="btn-primary px-5 py-2 text-sm">
              Try Calculator
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="rounded-lg p-2 text-slate-400 transition-all duration-200 hover:bg-white/[0.05] hover:text-white md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            isOpen ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 border-t border-white/[0.08] pt-2" aria-label="Mobile navigation">
            {HEADER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                aria-current={link.route === currentPath ? "page" : undefined}
                className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                  link.route === currentPath
                    ? "bg-white/[0.08] text-white"
                    : "text-slate-400 hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="mt-1 rounded-xl border border-white/[0.08] bg-white/[0.03] p-2">
              <p className="px-2 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Legal</p>
              <div className="mt-1 flex flex-col gap-1">
                {LEGAL_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={link.route === currentPath ? "page" : undefined}
                    className="rounded-lg px-4 py-2.5 text-sm font-medium text-slate-400 transition-all duration-200 hover:bg-white/[0.05] hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
