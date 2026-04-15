import { useState } from "react";
import { CalendarDays, LoaderCircle } from "lucide-react";
import DateFields from "./DateFields";
import ResultStat from "./ResultStat";
import {
  DAY_GRADIENTS,
  MONTH_NAMES,
  WEEKDAY_SHORT,
  formatLongDate,
  getDayDetails,
  normalizeInteger,
  todayDateParts,
  validateDateParts,
} from "../lib/dateMath";

function DayOfWeekCalculator({ dayTrivia }) {
  const today = todayDateParts();
  const [form, setForm] = useState({
    year: String(today.year),
    month: String(today.month),
    day: String(today.day),
  });
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState("");

  const updateField = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleCalculate = () => {
    const year = normalizeInteger(form.year);
    const month = normalizeInteger(form.month);
    const day = normalizeInteger(form.day);
    const validationError = validateDateParts({ year, month, day });

    if (validationError) {
      setError(validationError);
      setResult(null);
      return;
    }

    setError("");
    setIsCalculating(true);

    window.setTimeout(() => {
      setResult(getDayDetails(year, month, day));
      setIsCalculating(false);
    }, 350);
  };

  return (
    <div className="space-y-6">
      <div className="card p-6 sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 shadow-glow">
            <CalendarDays size={20} className="text-white" />
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-white">Day of the Week Calculator</h2>
            <p className="text-xs text-slate-500">Enter any date to find its weekday</p>
          </div>
        </div>

        <DateFields prefix="weekday" values={form} onChange={updateField} compact />

        {error ? (
          <p className="mb-4 mt-4 flex items-center gap-2 text-sm text-red-400">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
            {error}
          </p>
        ) : null}

        <button
          type="button"
          onClick={handleCalculate}
          disabled={isCalculating}
          className="btn-primary mt-4 w-full justify-center"
          aria-label="Calculate day of the week"
        >
          {isCalculating ? (
            <>
              <LoaderCircle size={16} className="animate-spin" />
              Calculating...
            </>
          ) : (
            <>
              <CalendarDays size={16} />
              Calculate
            </>
          )}
        </button>
      </div>

      {result && !isCalculating ? (
        <div className="animate-fade-up space-y-6">
          <div
            className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${result.gradient} p-px shadow-glow-lg`}
          >
            <div className="relative rounded-2xl bg-dark-950/85 p-8 text-center">
              <p className="mb-2 text-sm font-medium text-slate-400">
                {MONTH_NAMES[result.month - 1]} {result.day}, {result.year} was a...
              </p>
              <h2
                className={`font-display mb-3 bg-gradient-to-r ${result.gradient} bg-clip-text text-6xl font-black text-transparent sm:text-7xl`}
              >
                {result.weekdayName}
              </h2>
              <p className="text-sm text-slate-500">
                {formatLongDate({
                  year: result.year,
                  month: result.month,
                  day: result.day,
                  weekdayIndex: result.weekdayIndex,
                })}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <ResultStat label="Day of Year" value={`#${result.dayOfYear}`} />
            <ResultStat label="Week of Year" value={`Week ${result.isoWeek}`} />
            <ResultStat label="Zodiac Sign" value={result.zodiac} />
            <ResultStat label="Leap Year" value={result.leapYear ? "Yes" : "No"} />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="card p-5">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display font-bold text-white">
                  {MONTH_NAMES[result.month - 1]} {result.year}
                </h3>
                <CalendarDays size={14} className="text-slate-600" />
              </div>

              <div className="calendar-grid mb-2">
                {WEEKDAY_SHORT.map((label) => (
                  <div key={label} className="calendar-day text-xs font-semibold text-slate-600">
                    {label}
                  </div>
                ))}
              </div>

              <div className="calendar-grid">
                {result.calendarGrid.map((cell, index) => {
                  const isCurrent = cell.type === "current";
                  const isSelected = isCurrent && cell.day === result.day;

                  return (
                    <div
                      key={`${cell.type}-${cell.day}-${index}`}
                      className={`calendar-day text-xs ${
                        isCurrent ? "cursor-default text-slate-300 hover:bg-white/[0.05]" : "text-slate-700"
                      } ${isSelected ? `scale-110 bg-gradient-to-br ${result.gradient} font-bold text-white shadow-glow` : ""}`}
                    >
                      {cell.day}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="card p-5">
              <h3 className="font-display mb-4 font-bold text-white">Fun Facts About {result.weekdayName}</h3>
              <ul className="space-y-3">
                {(dayTrivia[result.weekdayKey] ?? []).map((fact) => (
                  <li key={fact} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${DAY_GRADIENTS[result.weekdayKey]}`}
                    />
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default DayOfWeekCalculator;
