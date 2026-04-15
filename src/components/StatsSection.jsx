function StatsSection({ stats }) {
  return (
    <section className="border-y border-white/[0.06] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 text-center md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="group">
            <div className="font-display mb-2 text-4xl font-bold gradient-text transition-transform duration-200 group-hover:scale-110">
              {stat.value}
            </div>
            <div className="text-sm text-slate-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
