export const HOME_CONTENT = {
  heroBadge: "Powered by Zeller's Congruence",
  heroTitlePrefix: "Find Any Date's",
  heroTitleAccent: "Day of the Week",
  heroSubtitle:
    "Enter any date - past, present, or future - and instantly discover what day of the week it falls on, complete with fun facts and a full calendar view.",
  heroPrimaryCta: "Try the Calculator",
  heroSecondaryCta: "Read the Blog",
  stats: [
    { value: "7", label: "Days Covered" },
    { value: "Infinity", label: "Dates Supported" },
    { value: "100%", label: "Accuracy" },
    { value: "0ms", label: "Load Time" },
  ],
  infoTitle: "Learn More About Weekdays",
  infoSubtitle: "Explore the fascinating history behind how we name and track days of the week.",
  infoSections: [
    {
      title: "ISO 8601",
      content:
        "The International Organization for Standardization defines ISO 8601, the global standard for date and time exchange. It formalizes Monday as the first day of the week and gives modern software a consistent way to represent dates.",
    },
    {
      title: "Gregorian Calendar",
      content:
        "The Gregorian calendar refined earlier systems by improving leap year rules and aligning the civil year more closely with the solar year. It remains the calendar used most widely for business, planning, and computing.",
    },
    {
      title: "Where Do Day Names Come From?",
      content:
        "Modern weekday names largely trace back to Roman and Germanic traditions. Sunday reflects the Sun, Monday the Moon, Tuesday Mars, Wednesday Mercury, Thursday Jupiter, Friday Venus, and Saturday Saturn.",
    },
  ],
  triviaTitle: "Trivia About Each Day",
  triviaSubtitle: "Did you know? Each day of the week has a rich history of curious facts and cultural significance.",
  ctaTitle: "What Day Were You Born?",
  ctaSubtitle:
    "Enter your birthday and discover which day of the week you were born, along with fascinating facts about that day.",
  ctaButton: "Calculate Now",
};

export const TOOL_TABS = [
  {
    id: "weekday",
    label: "Day of Week",
    description: "Find the weekday, calendar view, and date facts.",
  },
  {
    id: "difference",
    label: "Date Difference",
    description: "Compare two dates across days, weeks, months, and years.",
  },
  {
    id: "offset",
    label: "Add / Subtract",
    description: "Move forward or backward by any number of days.",
  },
];

export const DAY_TRIVIA = {
  monday: [
    "Statistically, Monday is often cited as one of the strongest stock market recovery days after a weekend pause.",
    '"Monday" and "dynamo" share the same letters, making it a rare weekday word oddity.',
    "Many people report feeling their heaviest on Mondays after relaxed weekend routines.",
  ],
  tuesday: [
    "For many office teams, Tuesday is considered the most productive day of the workweek.",
    "Job applications and company announcements are frequently scheduled for Tuesdays.",
    "Black Tuesday on October 29, 1929 marked the most dramatic crash day of the Great Depression.",
  ],
  wednesday: [
    'Wednesday is famously called "Hump Day" because it marks the midpoint of a typical workweek.',
    "Ash Wednesday is an important Christian holy day focused on reflection, fasting, and prayer.",
    "The Ash Wednesday bushfires of 1983 in Australia remain one of the country's most destructive fire events.",
  ],
  thursday: [
    "Maundy Thursday is observed in Christian tradition as the day of the Last Supper.",
    '"Thirsty Thursday" became a popular social phrase for kicking off the weekend early.',
  ],
  friday: [
    "Friday the 13th is considered unlucky in some cultures and lucky in others.",
    "Black Friday, the day after U.S. Thanksgiving, is one of the largest retail events of the year.",
    "Good Friday commemorates the crucifixion of Jesus and is observed globally.",
  ],
  saturday: [
    "Saturday is an official day of rest in Israel, with many services and businesses closed.",
    "National elections in Australia and New Zealand are traditionally held on Saturdays.",
    "In Sweden, children have long observed a tradition of enjoying sweets mainly on Saturdays.",
  ],
  sunday: [
    "In parts of the Middle East, Sunday can be the first working day of the week.",
    "Sunday is widely recognized in Christianity as a day of worship and rest.",
    "Months that begin on a Sunday will always include a Friday the 13th.",
    "Super Bowl Sunday is one of the largest annual sporting events in the world.",
  ],
};

export const HEADER_LINKS = [
  { label: "Calculator", href: "/#homepage-calculator", route: "/" },
  { label: "Blog", href: "/#blog", route: "/" },
  { label: "About Us", href: "/about-us", route: "/about-us" },
  { label: "Contact Us", href: "/contact-us", route: "/contact-us" },
];

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy", route: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use", route: "/terms-of-use" },
  { label: "Cookies Policy", href: "/cookies-policy", route: "/cookies-policy" },
];

export const FOOTER_GROUPS = [
  {
    title: "Quick Links",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Day of Week", href: "/#homepage-calculator" },
      { label: "Date Difference", href: "/#homepage-calculator" },
      { label: "Add / Subtract", href: "/#homepage-calculator" },
      { label: "Trivia", href: "/#day-trivia" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "ISO 8601 Standard", href: "/#learn-more" },
      { label: "Gregorian Calendar", href: "/#learn-more" },
      { label: "Day Names History", href: "/#learn-more" },
      { label: "Zeller's Congruence", href: "/#learn-more" },
    ],
  },
  {
    title: "Details",
    links: [
      { label: "Weekday Calculator", href: "/#homepage-calculator" },
      { label: "Leap Year Logic", href: "/#homepage-calculator" },
      { label: "Calendar Preview", href: "/#homepage-calculator" },
      { label: "Birth Day Finder", href: "/#homepage-calculator" },
    ],
  },
];
