function InfoSection({ id, title, subtitle, sections, icons }) {
  return (
    <section id={id} className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="section-title mb-4">{title}</h2>
          <p className="section-subtitle mx-auto max-w-2xl">{subtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {sections.map((section, index) => {
            const Icon = icons[index];

            return (
              <div key={section.title} className="card-hover p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-primary-500/20 bg-gradient-to-br from-primary-500/20 to-accent-500/20">
                  <Icon size={20} className="text-primary-400" />
                </div>

                <h3 className="font-display mb-3 text-lg font-bold text-white">{section.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{section.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
