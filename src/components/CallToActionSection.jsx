import { Sparkles } from "lucide-react";

function CallToActionSection({ title, subtitle, buttonLabel, onClick }) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 to-accent-600 p-px shadow-glow-lg">
          <div className="relative rounded-3xl bg-gradient-to-br from-primary-900/90 to-dark-950 p-10 text-center">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-3xl" />
              <div className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full bg-white blur-3xl" />
            </div>

            <div className="relative">
              <h2 className="font-display mb-4 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
              <p className="mx-auto mb-8 max-w-xl text-primary-200">{subtitle}</p>

              <button
                type="button"
                onClick={onClick}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 font-bold text-primary-700 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-50"
              >
                <Sparkles size={18} />
                {buttonLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToActionSection;
