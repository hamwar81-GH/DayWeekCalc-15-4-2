import { CalendarDays, CalendarRange, GitCompareArrows } from "lucide-react";
import { TOOL_TABS } from "../lib/content";
import DayOfWeekCalculator from "./DayOfWeekCalculator";
import DateDifferenceCalculator from "./DateDifferenceCalculator";
import AddSubtractCalculator from "./AddSubtractCalculator";

const TAB_ICONS = {
  weekday: CalendarDays,
  difference: GitCompareArrows,
  offset: CalendarRange,
};

function CalculatorSuite({ dayTrivia, activeTool = "weekday", onActiveToolChange }) {
  const handleToolChange = (toolId) => {
    onActiveToolChange?.(toolId);
  };

  return (
    <div className="space-y-6">
      <div className="card p-6 sm:p-8">
        <div className="mb-6">
          <h2 className="font-display mb-3 text-lg font-bold text-white">Day & Date Calculator</h2>
          <p className="leading-relaxed text-slate-400">
            Use the same homepage experience to find weekdays, compare two dates, or add and subtract
            days without leaving the page.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {TOOL_TABS.map((tab) => {
            const Icon = TAB_ICONS[tab.id];
            const isActive = activeTool === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleToolChange(tab.id)}
                className={`inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400/60 focus:ring-offset-2 focus:ring-offset-dark-950 ${
                  isActive
                    ? "border-primary-500/30 bg-white/[0.08] text-white shadow-glow"
                    : "border-white/[0.1] bg-white/[0.04] text-slate-200 hover:scale-[1.02] hover:border-white/[0.18] hover:bg-white/[0.08] hover:text-white hover:shadow-glow"
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {activeTool === "weekday" ? <DayOfWeekCalculator dayTrivia={dayTrivia} /> : null}
      {activeTool === "difference" ? <DateDifferenceCalculator /> : null}
      {activeTool === "offset" ? <AddSubtractCalculator /> : null}
    </div>
  );
}

export default CalculatorSuite;
