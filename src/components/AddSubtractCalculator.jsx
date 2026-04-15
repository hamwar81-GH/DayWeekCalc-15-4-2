import { useState } from "react";
import { CalendarRange, LoaderCircle, Minus, Plus } from "lucide-react";
import DateFields from "./DateFields";
import ResultStat from "./ResultStat";
import {
  addDaysToDate,
  formatLongDate,
  getDayDetails,
  normalizeInteger,
  todayDateParts,
  validateDateParts,
} from "../lib/dateMath";

function AddSubtractCalculator() {
  const today = todayDateParts();
  const [mode, setMode] = useState("add");
  const [offset, setOffset] = useState("30");
  const [form, setForm] = useState({
    year: String(today.year),
    month: String(today.month),
    day: String(today.day),
  });
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState("");

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleCalculate = () => {
    const normalized = {
      year: normalizeInteger(form.year),
      month: normalizeInteger(form.month),
      day: normalizeInteger(form.day),
    };
    const dayOffset = normalizeInteger(offset);
    const validationError = validateDateParts(normalized);

    if (validationError) {
      setError(validationError);
      setResult(null);
      return;
    }

    if (!Number.isInteger(dayOffset)) {
      setError("Please enter a valid number of days.");
      setResult(null);
      return;
    }

    setError("");
    setIsCalculating(true);

    window.setTimeout(() => {
      const signedOffset = mode === "add" ? dayOffset : -dayOffset;
      const targetDate = addDaysToDate(normalized, signedOffset);

      setResult({
        original: getDayDetails(normalized.year, normalized.month, normalized.day),
        target: getDayDetails(targetDate.year, targetDate.month, targetDate.day),
        absoluteOffset: Math.abs(signedOffset),
      });
      setIsCalculating(false);
    }, 350);
  };

  return (
    <div className="space-y-6">
      <div className="card p-6 sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 shadow-glow">
            <CalendarRange size={20} className="text-white" />
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-white">Add / Subtract Days</h2>
            <p className="text-xs text-slate-500">Move forward or backward by any number of calendar days</p>
          </div>
        </div>

        <DateFields prefix="offset" values={form} onChange={updateField} />

        <div className="mt-6 grid gap-3 sm:grid-cols-[auto,1fr] sm:items-end">
          <div>
            <span className="mb-1.5 block text-xs font-medium text-slate-400">Operation</span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setMode("add")}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  mode === "add"
                    ? "border-primary-500/30 bg-white/[0.08] text-white shadow-glow"
                    : "border-white/[0.1] bg-white/[0.04] text-slate-200 hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                <Plus size={15} />
                Add
              </button>
              <button
                type="button"
                onClick={() => setMode("subtract")}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  mode === "subtract"
                    ? "border-primary-500/30 bg-white/[0.08] text-white shadow-glow"
                    : "border-white/[0.1] bg-white/[0.04] text-slate-200 hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                <Minus size={15} />
                Subtract
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="offset-days" className="mb-1.5 block text-xs font-medium text-slate-400">
              Number of Days
            </label>
            <input
              id="offset-days"
              type="number"
              value={offset}
              onChange={(event) => setOffset(event.target.value)}
              className="input-field"
              placeholder="30"
            />
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
              <CalendarRange size={16} />
              Calculate New Date
            </>
          )}
        </button>
      </div>

      {result && !isCalculating ? (
        <div className="animate-fade-up space-y-6">
          <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${result.target.gradient} p-px shadow-glow-lg`}>
            <div className="rounded-2xl bg-dark-950/85 p-8 text-center">
              <p className="mb-2 text-sm font-medium text-slate-400">
                {mode === "add" ? "Adding" : "Subtracting"} {result.absoluteOffset} day{result.absoluteOffset === 1 ? "" : "s"}
              </p>
              <h2
                className={`font-display mb-3 bg-gradient-to-r ${result.target.gradient} bg-clip-text text-5xl font-black text-transparent sm:text-6xl`}
              >
                {result.target.weekdayName}
              </h2>
              <p className="text-sm text-slate-500">
                {formatLongDate({
                  year: result.target.year,
                  month: result.target.month,
                  day: result.target.day,
                  weekdayIndex: result.target.weekdayIndex,
                })}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <ResultStat label="Day of Year" value={`#${result.target.dayOfYear}`} />
            <ResultStat label="Week of Year" value={`Week ${result.target.isoWeek}`} />
            <ResultStat label="Leap Year" value={result.target.leapYear ? "Yes" : "No"} />
            <ResultStat label="Zodiac Sign" value={result.target.zodiac} />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="card p-5">
              <h3 className="font-display mb-4 font-bold text-white">Operation Summary</h3>
              <div className="space-y-3 text-sm text-slate-400">
                <p>
                  <span className="font-semibold text-white">Original:</span>{" "}
                  {formatLongDate({
                    year: result.original.year,
                    month: result.original.month,
                    day: result.original.day,
                    weekdayIndex: result.original.weekdayIndex,
                  })}
                </p>
                <p>
                  <span className="font-semibold text-white">Action:</span> {mode === "add" ? "Add" : "Subtract"}{" "}
                  {result.absoluteOffset} day{result.absoluteOffset === 1 ? "" : "s"}
                </p>
                <p>
                  <span className="font-semibold text-white">Result:</span>{" "}
                  {formatLongDate({
                    year: result.target.year,
                    month: result.target.month,
                    day: result.target.day,
                    weekdayIndex: result.target.weekdayIndex,
                  })}
                </p>
              </div>
            </div>

            <div className="card p-5">
              <h3 className="font-display mb-4 font-bold text-white">Weekday Shift</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className={`rounded-xl border border-white/[0.08] bg-gradient-to-br ${result.original.gradient} p-px`}>
                  <div className="rounded-xl bg-dark-950/90 p-4 text-center">
                    <div className="text-xs uppercase tracking-wider text-slate-500">Original</div>
                    <div className="font-display mt-2 text-2xl font-bold text-white">{result.original.weekdayName}</div>
                  </div>
                </div>
                <div className={`rounded-xl border border-white/[0.08] bg-gradient-to-br ${result.target.gradient} p-px`}>
                  <div className="rounded-xl bg-dark-950/90 p-4 text-center">
                    <div className="text-xs uppercase tracking-wider text-slate-500">Result</div>
                    <div className="font-display mt-2 text-2xl font-bold text-white">{result.target.weekdayName}</div>
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

export default AddSubtractCalculator;
