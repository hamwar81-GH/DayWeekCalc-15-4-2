import { WEEKDAY_NAMES } from "../lib/dateMath";

const DAY_ORDER = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
const DAY_INDEX = {
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
  sunday: 0,
};

function TriviaSection({ id, title, subtitle, trivia }) {
  return (
    <section
      id={id}
      className="bg-gradient-to-b from-transparent via-primary-950/10 to-transparent px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="section-title mb-4">{title}</h2>
          <p className="section-subtitle mx-auto max-w-2xl">{subtitle}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {DAY_ORDER.map((dayKey) => (
            <div
              key={dayKey}
              className="card group p-5 transition-all duration-300 hover:border-primary-500/30"
            >
              <h3 className="font-display mb-3 flex items-center gap-2 font-bold text-white">
                <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 transition-transform group-hover:scale-125" />
                {WEEKDAY_NAMES[DAY_INDEX[dayKey]]}
              </h3>

              <ul className="space-y-2">
                {(trivia[dayKey] ?? []).map((fact) => (
                  <li key={fact} className="flex gap-2 text-xs leading-relaxed text-slate-500">
                    <span className="mt-0.5 shrink-0 text-primary-600">▸</span>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TriviaSection;
