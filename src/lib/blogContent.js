export const BLOG_HERO = {
  badge: "Weekday Guides and Calendar Notes",
  title: "Blog",
  accent: "Insights",
  subtitle:
    "Explore practical reads about weekday logic, date standards, and calendar history written to support the same clear, focused experience behind Day of the Week Calculator.",
};

export const BLOG_POSTS = [
  {
    id: "iso-8601",
    category: "Date Standard",
    readTime: "4 min read",
    title: "ISO 8601",
    excerpt:
      "The International Organization for Standardization defines ISO 8601, the global standard for date and time exchange. It formalizes Monday as the first day of the week and gives modern software a consistent way to represent dates.",
    detail:
      "ISO 8601 matters because it reduces ambiguity. Instead of relying on regional date formats that can be interpreted in different ways, the standard encourages a clear structure that software systems, planning tools, and data workflows can all understand consistently.",
    takeaway:
      "For a weekday tool, that consistency matters. It helps people think about dates more clearly, compare schedules with less confusion, and keep calendar logic aligned with a widely recognized standard.",
    icon: "clock",
  },
  {
    id: "gregorian-calendar",
    category: "Calendar System",
    readTime: "5 min read",
    title: "Gregorian Calendar",
    excerpt:
      "The Gregorian calendar refined earlier systems by improving leap year rules and aligning the civil year more closely with the solar year. It remains the calendar used most widely for business, planning, and computing.",
    detail:
      "That refinement is what keeps long-range date calculations practical. Without more reliable leap year handling, weekday lookups and date offsets would slowly drift out of step over time, making everyday planning less dependable.",
    takeaway:
      "Because the Gregorian calendar is the everyday calendar for most users, it provides the foundation for the calculator's date comparisons, weekday results, and forward or backward date calculations.",
    icon: "calendar",
  },
  {
    id: "day-name-history",
    category: "Weekday History",
    readTime: "4 min read",
    title: "Where Do Day Names Come From?",
    excerpt:
      "Modern weekday names largely trace back to Roman and Germanic traditions. Sunday reflects the Sun, Monday the Moon, Tuesday Mars, Wednesday Mercury, Thursday Jupiter, Friday Venus, and Saturday Saturn.",
    detail:
      "That history gives a familiar weekly rhythm deeper meaning. The names people use casually today connect to older astronomical traditions, cultural exchange, and the long history of timekeeping across different societies.",
    takeaway:
      "For the site, this context turns a quick weekday lookup into something more memorable. It helps explain why date questions can feel practical and surprisingly interesting at the same time.",
    icon: "book",
  },
];

export const BLOG_CTA = {
  title: "Want to Put the Guides to Work?",
  subtitle:
    "Jump back into the calculator to check a date, compare two dates, or explore weekday details with the same fast, practical experience.",
  buttonLabel: "Open the Calculator",
  href: "/#homepage-calculator",
};
