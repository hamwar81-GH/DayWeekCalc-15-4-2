import JsonLd from "../components/JsonLd";
import FaqSection from "../components/FaqSection";
import SearchSection from "../components/SearchSection";
import { useRef } from "react";
import { BookOpen, CalendarDays, Clock3 } from "lucide-react";
import HeroSection from "../components/HeroSection";
import CalculatorSuite from "../components/CalculatorSuite";
import StatsSection from "../components/StatsSection";
import InfoSection from "../components/InfoSection";
import TriviaSection from "../components/TriviaSection";
import CallToActionSection from "../components/CallToActionSection";
import { DAY_TRIVIA, HOME_CONTENT, HOME_FAQS, SEARCH_TARGETS } from "../lib/content";
import { buildFaqSchema } from "../lib/schema";
import { usePageMetadata } from "../lib/usePageMetadata";

const INFO_ICONS = [Clock3, CalendarDays, BookOpen];

function HomePage() {
  const calculatorRef = useRef(null);
  const faqSchema = buildFaqSchema(HOME_FAQS);

  usePageMetadata({
    title: "Day of the Week Calculator - Find Any Date's Weekday Instantly",
    description:
      "Find the day of the week for any date instantly. Includes date differences, add and subtract tools, calendar view, and helpful date context.",
    canonicalPath: "/",
  });

  const scrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <main className="flex-1">
      <JsonLd id="home-faq-schema" data={faqSchema} />
      <HeroSection
        badge={HOME_CONTENT.heroBadge}
        titlePrefix={HOME_CONTENT.heroTitlePrefix}
        titleAccent={HOME_CONTENT.heroTitleAccent}
        subtitle={HOME_CONTENT.heroSubtitle}
        primaryLabel={HOME_CONTENT.heroPrimaryCta}
        secondaryLabel={HOME_CONTENT.heroSecondaryCta}
        onPrimaryClick={scrollToCalculator}
        secondaryHref="/blog"
      />

      <section ref={calculatorRef} id="homepage-calculator" className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <CalculatorSuite dayTrivia={DAY_TRIVIA} />
        </div>
      </section>

      <StatsSection stats={HOME_CONTENT.stats} />

      <SearchSection
        id="site-search"
        title={HOME_CONTENT.searchTitle}
        subtitle={HOME_CONTENT.searchSubtitle}
        targets={SEARCH_TARGETS}
      />

      <div id="blog" className="scroll-mt-24" aria-hidden="true" />

      <InfoSection
        id="learn-more"
        title={HOME_CONTENT.infoTitle}
        subtitle={HOME_CONTENT.infoSubtitle}
        sections={HOME_CONTENT.infoSections}
        icons={INFO_ICONS}
      />

      <FaqSection
        id="faq"
        title={HOME_CONTENT.faqTitle}
        subtitle={HOME_CONTENT.faqSubtitle}
        items={HOME_FAQS}
      />

      <TriviaSection
        id="day-trivia"
        title={HOME_CONTENT.triviaTitle}
        subtitle={HOME_CONTENT.triviaSubtitle}
        trivia={DAY_TRIVIA}
      />

      <CallToActionSection
        title={HOME_CONTENT.ctaTitle}
        subtitle={HOME_CONTENT.ctaSubtitle}
        buttonLabel={HOME_CONTENT.ctaButton}
        onClick={scrollToCalculator}
      />
    </main>
  );
}

export default HomePage;
