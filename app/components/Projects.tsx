import data from "../data.json";

/** Split the comma-separated technologies string into clean chip labels,
 *  dropping trailing "etc." noise and empty fragments. */
function parseTechnologies(value?: string): string[] {
  if (!value) return [];
  return value
    .split(",")
    .map((t) => t.trim().replace(/\.+$/, "").trim())
    .filter((t) => t.length > 0 && !/^etc$/i.test(t));
}

export default function Projects() {
  return (
    <section
      className="max-w-6xl mx-auto px-6 py-12 md:py-20 border-t border-[var(--border)] overflow-hidden"
      aria-label="Featured Projects"
    >
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-16 md:mb-24 gap-6">
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[var(--text)]">
          Selected <span className="italic opacity-60">Works</span>
        </h2>
        <p className="text-lg md:text-xl text-[var(--text-muted)] font-light max-w-sm">
          A collection of digital products and blockchain initiatives I&apos;ve helped bring to life.
        </p>
      </div>

      <div className="flex flex-col">
        {data.projects.map((project, index) => {
          const tech = parseTechnologies(project.technologies);
          return (
            <article
              key={index}
              className="group relative border-t border-[var(--border)] py-12 md:py-16 transition-colors duration-500 hover:bg-[var(--accent)]/[0.03]"
              aria-labelledby={`project-title-${index}`}
            >
              {/* Editorial left line that grows on hover */}
              <div
                className="absolute top-0 -left-6 md:-left-10 w-px h-0 bg-[var(--accent)] group-hover:h-full transition-all duration-1000 ease-in-out hidden md:block"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
                {/* Index + period rail */}
                <div className="md:col-span-3 lg:col-span-3 flex flex-row md:flex-col gap-3 md:gap-4 items-baseline md:items-start">
                  <span
                    className="font-serif text-4xl md:text-6xl text-[var(--text-muted)] opacity-30 leading-none tabular-nums"
                    aria-hidden="true"
                  >
                    0{index + 1}
                  </span>
                  <span className="text-[10px] md:text-xs font-sans tracking-[0.3em] uppercase text-[var(--accent)] font-bold">
                    {project.period || "Featured Project"}
                  </span>
                </div>

                {/* Content */}
                <div className="md:col-span-9 lg:col-span-9 flex flex-col gap-6 md:gap-8">
                  <h3
                    id={`project-title-${index}`}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--text)] leading-tight group-hover:text-[var(--accent)] transition-colors duration-300"
                  >
                    {project.title}
                  </h3>

                  <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 md:gap-12">
                    <p className="lg:col-span-6 text-lg md:text-xl text-[var(--text-muted)] leading-relaxed font-light whitespace-pre-line">
                      {project.description}
                    </p>

                    {tech.length > 0 && (
                      <div className="lg:col-span-4 flex flex-col gap-4 lg:pl-12 lg:border-l border-[var(--border)]">
                        <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[var(--text-muted)] font-bold opacity-60">
                          Tech Architecture
                        </span>
                        <ul className="flex flex-wrap gap-2" aria-label={`Technologies used in ${project.title}`}>
                          {tech.map((item) => (
                            <li
                              key={item}
                              className="text-xs md:text-sm font-medium text-[var(--text)] border border-[var(--border)] rounded-full px-3 py-1 transition-colors duration-300 group-hover:border-[var(--accent)]/40"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
