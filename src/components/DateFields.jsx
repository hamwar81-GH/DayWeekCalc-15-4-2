import FormField from "./FormField";
import { MONTH_NAMES } from "../lib/dateMath";

function DateFields({ prefix, values, onChange, labels = {}, compact = false }) {
  const gridClass = compact ? "grid grid-cols-3 gap-3" : "grid gap-3 sm:grid-cols-3";

  return (
    <div className={gridClass}>
      <FormField htmlFor={`${prefix}-month`} label={labels.month ?? "Month"}>
        <select
          id={`${prefix}-month`}
          value={values.month}
          onChange={(event) => onChange("month", event.target.value)}
          className="input-field"
        >
          {MONTH_NAMES.map((monthName, index) => (
            <option key={monthName} value={index + 1} className="bg-dark-900">
              {monthName}
            </option>
          ))}
        </select>
      </FormField>

      <FormField htmlFor={`${prefix}-day`} label={labels.day ?? "Day"}>
        <input
          id={`${prefix}-day`}
          type="number"
          min="1"
          max="31"
          value={values.day}
          onChange={(event) => onChange("day", event.target.value)}
          placeholder="DD"
          className="input-field"
        />
      </FormField>

      <FormField htmlFor={`${prefix}-year`} label={labels.year ?? "Year"}>
        <input
          id={`${prefix}-year`}
          type="number"
          min="1"
          value={values.year}
          onChange={(event) => onChange("year", event.target.value)}
          placeholder="YYYY"
          className="input-field"
        />
      </FormField>
    </div>
  );
}

export default DateFields;
