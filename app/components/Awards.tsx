import data from "../data.json";

export default function Honors() {
  const awards = data.certifications_and_awards.filter(item => 'event' in item || 'organizer' in item);

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 md:py-20 border-t border-[var(--border)]">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--text)]">
            Honors
          </h2>
          <p className="text-[var(--text-muted)] font-light max-w-xs mt-4">
            Recognition for academic excellence and leadership contributions.
          </p>
        </div>
        
        <div className="md:col-span-8 flex flex-col gap-8">
          {awards.map((honor: any, index: number) => (
            <div
              key={index}
              className="group border-b border-[var(--border)] pb-8 last:border-none last:pb-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                <h3 className="text-2xl md:text-3xl text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                  {honor.title} {honor.event ? `- ${honor.event}` : ""}
                </h3>
                {honor.year && (
                  <span className="text-sm font-sans tracking-widest uppercase text-[var(--text-muted)]">
                    {honor.year}
                  </span>
                )}
              </div>
              <p className="text-lg text-[var(--text-muted)] font-light italic">
                {honor.organizer || honor.institution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

