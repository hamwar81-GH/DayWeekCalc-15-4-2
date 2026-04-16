function FaqSection({ id, title, subtitle, items }) {
  return (
    <section id={id} className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="section-title mb-4">{title}</h2>
          <p className="section-subtitle mx-auto max-w-2xl">{subtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <article key={item.question} className="card-hover p-6">
              <h3 className="font-display mb-4 text-xl font-bold text-white">{item.question}</h3>
              <p className="text-sm leading-relaxed text-slate-500">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
