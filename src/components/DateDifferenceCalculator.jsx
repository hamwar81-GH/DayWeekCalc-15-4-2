import { useState } from "react";
import { GitCompareArrows, LoaderCircle } from "lucide-react";
import DateFields from "./DateFields";
import ResultStat from "./ResultStat";
import {
  calculateDateDifference,
  formatLongDate,
  getDayDetails,
  normalizeInteger,
  todayDateParts,
  validateDateParts,
} from "../lib/dateMath";

function DateDifferenceCalculator() {
  const today = todayDateParts();
  const [startDate, setStartDate] = useState({
    year: String(today.year),
    month: String(today.month),
    day: String(today.day),
  });
  const [endDate, setEndDate] = useState({
    year: String(today.year),
    month: String(today.month),
    day: String(today.day),
  });
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState("");

  const updateStart = (field, value) => {
    setStartDate((current) => ({ ...current, [field]: value }));
  };

  const updateEnd = (field, value) => {
    setEndDate((current) => ({ ...current, [field]: value }));
  };

  const handleCalculate = () => {
    const normalizedStart = {
      year: normalizeInteger(startDate.year),
      month: normalizeInteger(startDate.month),
      day: normalizeInteger(startDate.day),
    };
    const normalizedEnd = {
      year: normalizeInteger(endDate.year),
      month: normalizeInteger(endDate.month),
      day: normalizeInteger(endDate.day),
    };

    const startError = validateDateParts(normalizedStart);
    const endError = validateDateParts(normalizedEnd);

    if (startError || endError) {
      setError(startError || endError);
      setResult(null);
      return;
    }

    setError("");
    setIsCalculating(true);

    window.setTimeout(() => {
      setResult({
        start: getDayDetails(normalizedStart.year, normalizedStart.month, normalizedStart.day),
        end: getDayDetails(normalizedEnd.year, normalizedEnd.month, normalizedEnd.day),
        difference: calculateDateDifference(normalizedStart, normalizedEnd),
      });
      setIsCalculating(false);
    }, 350);
  };

  return (
    <div className="space-y-6">
      <div className="card p-6 sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 shadow-glow">
            <GitCompareArrows size={20} className="text-white" />
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-white">Date Difference Calculator</h2>
            <p className="text-xs text-slate-500">Compare two dates across calendar and total elapsed time</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="card p-5">
            <h3 className="font-display mb-4 font-bold text-white">Start Date</h3>
            <DateFields prefix="difference-start" values={startDate} onChange={updateStart} />
          </div>

          <div className="card p-5">
            <h3 className="font-display mb-4 font-bold text-white">End Date</h3>
            <DateFields prefix="difference-end" values={endDate} onChange={updateEnd} />
          </div>
        </div>

        {error ? (
          <p className="mb-4 mt-4 flex items-center gap-2 text-sm text-red-400">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
            {error}
          </p>
        ) : null}

        <button type="button" onClick={handleCalculate} disabled={isCalculating} className="btn-primary mt-6 w-full justify-center">
          {isCalculating ? (
            <>
              <LoaderCircle size={16} className="animate-spin" />
              Calculating...
            </>
          ) : (
            <>
              <GitCompareArrows size={16} />
              Compare Dates
            </>
          )}
        </button>
      </div>

      {result && !isCalculating ? (
        <div className="animate-fade-up space-y-6">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 p-px shadow-glow-lg">
            <div className="rounded-2xl bg-dark-950/85 p-8 text-center">
              <p className="mb-2 text-sm font-medium text-slate-400">Difference between the selected dates</p>
              <h2 className="font-display mb-3 bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-5xl font-black text-transparent sm:text-6xl">
                {result.difference.absoluteDays} Days
              </h2>
              <p className="text-sm text-slate-500">
                {result.difference.isForward ? "End date is after the start date." : "End date is before the start date."}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <ResultStat
              label="Whole Weeks"
              value={`${result.difference.wholeWeeks}w ${result.difference.remainingDaysAfterWeeks}d`}
            />
            <ResultStat label="Calendar Years" value={`${result.difference.calendarYears}`} />
            <ResultStat label="Calendar Months" value={`${result.difference.totalMonths}`} />
            <ResultStat label="Calendar Days" value={`${result.difference.calendarDays}`} />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="card p-5">
              <h3 className="font-display mb-4 font-bold text-white">Date Breakdown</h3>
              <div className="space-y-3 text-sm text-slate-400">
                <p>
                  <span className="font-semibold text-white">Start:</span>{" "}
                  {formatLongDate({
                    year: result.start.year,
                    month: result.start.month,
                    day: result.start.day,
                    weekdayIndex: result.start.weekdayIndex,
                  })}
                </p>
                <p>
                  <span className="font-semibold text-white">End:</span>{" "}
                  {formatLongDate({
                    year: result.end.year,
                    month: result.end.month,
                    day: result.end.day,
                    weekdayIndex: result.end.weekdayIndex,
                  })}
                </p>
                <p>
                  <span className="font-semibold text-white">Calendar difference:</span>{" "}
                  {result.difference.calendarYears} years, {result.difference.calendarMonths} months,{" "}
                  {result.difference.calendarDays} days
                </p>
                <p>
                  <span className="font-semibold text-white">Signed day difference:</span>{" "}
                  {result.difference.signedDays}
                </p>
              </div>
            </div>

            <div className="card p-5">
              <h3 className="font-display mb-4 font-bold text-white">Weekday Context</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className={`rounded-xl border border-white/[0.08] bg-gradient-to-br ${result.start.gradient} p-px`}>
                  <div className="rounded-xl bg-dark-950/90 p-4 text-center">
                    <div className="text-xs uppercase tracking-wider text-slate-500">Start</div>
                    <div className="font-display mt-2 text-2xl font-bold text-white">{result.start.weekdayName}</div>
                    <div className="mt-2 text-xs text-slate-500">Week {result.start.isoWeek}</div>
                  </div>
                </div>

                <div className={`rounded-xl border border-white/[0.08] bg-gradient-to-br ${result.end.gradient} p-px`}>
                  <div className="rounded-xl bg-dark-950/90 p-4 text-center">
                    <div className="text-xs uppercase tracking-wider text-slate-500">End</div>
                    <div className="font-display mt-2 text-2xl font-bold text-white">{result.end.weekdayName}</div>
                    <div className="mt-2 text-xs text-slate-500">Week {result.end.isoWeek}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default DateDifferenceCalculator;
