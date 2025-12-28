import data from "../data.json";

export default function Languages() {
    return (
    <section className="max-w-6xl mx-auto px-6 py-12 md:py-20 border-t border-[var(--border)]">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--text)]">
            Languages
          </h2>
          <p className="text-[var(--text-muted)] font-light max-w-xs mt-4">
            Professional communication skills in multiple languages.
          </p>
        </div>
        
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {data.languages.map((item, index) => (
            <div key={index} className="premium-card rounded-none shadow-none hover:shadow-none hover:translate-y-0 border-none border-l-2 border-[var(--border)] hover:border-[var(--accent)] transition-all px-8 py-4">
              <p className="text-2xl font-serif text-[var(--text)]">{item.language}</p>
              <p className="text-sm font-sans tracking-widest uppercase text-[var(--text-muted)] mt-1">
                {item.level || (item.reading === 'C1' ? 'Professional Proficiency' : 'Bilingual Proficiency')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
}

