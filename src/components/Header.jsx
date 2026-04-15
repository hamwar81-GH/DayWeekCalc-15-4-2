import { useEffect, useState } from "react";
import { CalendarDays, Menu, X } from "lucide-react";
import { HEADER_LINKS } from "../lib/content";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
          <a href="#" className="group flex items-center gap-2.5" aria-label="DayWeek Calculator home">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 shadow-glow transition-shadow duration-300 group-hover:shadow-glow-lg">
              <CalendarDays size={16} className="text-white" />
            </div>
            <span className="font-display text-lg font-bold leading-tight text-white">
              Day<span className="gradient-text">Week</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {HEADER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-slate-400 transition-all duration-200 hover:bg-white/[0.05] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <a href="#homepage-calculator" className="btn-primary px-5 py-2 text-sm">
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
                className="rounded-lg px-4 py-2.5 text-sm font-medium text-slate-400 transition-all duration-200 hover:bg-white/[0.05] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
