import { CalendarDays } from "lucide-react";
import { ABOUT_CONTACT } from "../lib/aboutContent";
import { FOOTER_GROUPS } from "../lib/content";

function Footer() {
  const year = new Date().getFullYear();
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const homeHref = currentPath === "/" ? "#" : "/";

  return (
    <footer id="site-footer" className="mt-24 border-t border-white/[0.06] scroll-mt-24" role="contentinfo">
      <div className="h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_repeat(4,minmax(0,1fr))]">
          <div>
            <a href={homeHref} className="group mb-4 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 shadow-glow">
                <CalendarDays size={18} className="text-white" />
              </div>
              <span className="font-display text-xl font-bold text-white">
                Day<span className="gradient-text">Week</span>
              </span>
            </a>

            <p className="mb-6 text-sm leading-relaxed text-slate-500">
              Find the day of the week for any date, compare two dates, and move forward or backward in
              time with fast, client-side date logic.
            </p>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
              <p className="text-xs leading-relaxed text-slate-600">
                This homepage uses Zeller&apos;s Congruence for weekday lookup and manual Gregorian date
                arithmetic for difference and add/subtract calculations.
              </p>
            </div>
          </div>

          {FOOTER_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 transition-colors duration-200 hover:text-slate-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-sm text-slate-600">© {year} DayWeek Calculator. All rights reserved.</p>
          <p className="text-sm text-slate-700">
            Built with <span className="text-red-500">love</span> for date enthusiasts worldwide
          </p>
        </div>

        <div className="sr-only">
          <p>Day of the Week Calculator is an online-first date utility and business entity.</p>
          <p>
            Contact email: <a href={`mailto:${ABOUT_CONTACT.email}`}>{ABOUT_CONTACT.email}</a>
          </p>
          <p>Copyright {year} DayWeek Calculator. All rights reserved.</p>
          <nav aria-label="Footer essential links">
            {FOOTER_GROUPS.flatMap((group) => group.links).map((link) => (
              <a key={`footer-hidden-${link.label}`} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
