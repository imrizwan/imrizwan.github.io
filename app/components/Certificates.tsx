import data from "../data.json";

export default function Certificates() {
  const certifications = data.certifications_and_awards.filter(item => 'provider' in item || 'platform' in item);

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 md:py-20 border-t border-[var(--border)]" aria-label="Certifications">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--text)]">
            Certifications
          </h2>
          <p className="text-[var(--text-muted)] font-light max-w-xs mt-4">
            Professional credentials and continuous learning achievements.
          </p>
        </div>
        
        <div className="md:col-span-8 flex flex-col gap-6" role="list" aria-label="Certification list">
          {certifications.map((cert: any, index: number) => (
            <article
              key={index}
              className="group premium-card flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-none border-b border-[var(--border)] rounded-none hover:shadow-none hover:translate-y-0 hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors p-6"
              role="listitem"
            >
              <div className="flex flex-col gap-1">
                <h3 className="text-xl md:text-2xl text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                  {cert.title}
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  <span className="text-sm font-sans tracking-widest uppercase text-[var(--text-muted)]">
                    <time dateTime={cert.year.toString()}>{cert.year}</time>
                  </span>
                  <span className="text-sm font-sans tracking-widest uppercase text-[var(--accent)]/70">
                    {cert.provider || cert.platform} {cert.instructor ? `(${cert.instructor})` : ""}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

