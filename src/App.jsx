import { useRef } from "react";
import { BookOpen, CalendarDays, Clock3 } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import CalculatorSuite from "./components/CalculatorSuite";
import StatsSection from "./components/StatsSection";
import InfoSection from "./components/InfoSection";
import TriviaSection from "./components/TriviaSection";
import CallToActionSection from "./components/CallToActionSection";
import { DAY_TRIVIA, HOME_CONTENT } from "./lib/content";

const INFO_ICONS = [Clock3, CalendarDays, BookOpen];

function App() {
  const calculatorRef = useRef(null);

  const scrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <HeroSection
          badge={HOME_CONTENT.heroBadge}
          titlePrefix={HOME_CONTENT.heroTitlePrefix}
          titleAccent={HOME_CONTENT.heroTitleAccent}
          subtitle={HOME_CONTENT.heroSubtitle}
          primaryLabel={HOME_CONTENT.heroPrimaryCta}
          secondaryLabel={HOME_CONTENT.heroSecondaryCta}
          onPrimaryClick={scrollToCalculator}
        />

        <section ref={calculatorRef} id="homepage-calculator" className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <CalculatorSuite dayTrivia={DAY_TRIVIA} />
          </div>
        </section>

        <StatsSection stats={HOME_CONTENT.stats} />

        <InfoSection
          id="learn-more"
          title={HOME_CONTENT.infoTitle}
          subtitle={HOME_CONTENT.infoSubtitle}
          sections={HOME_CONTENT.infoSections}
          icons={INFO_ICONS}
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

      <Footer />
    </div>
  );
}

export default App;
