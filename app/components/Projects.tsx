import data from "../data.json";

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 md:py-20 border-t border-[var(--border)] overflow-hidden" aria-label="Featured Projects">
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-16 md:mb-24 gap-6">
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[var(--text)]">
          Selected <span className="italic opacity-60">Works</span>
        </h2>
        <p className="text-lg md:text-xl text-[var(--text-muted)] font-light max-w-sm">
          A collection of digital products and blockchain initiatives I&apos;ve helped bring to life.
        </p>
      </div>

      <div className="space-y-24 md:space-y-48">
        {data.projects.map((project, index) => (
          <article key={index} className="group relative" aria-labelledby={`project-title-${index}`}>
            <div className="grid-layout items-start transition-all duration-700 hover:md:translate-x-4">
              <div className="md:col-span-1 hidden md:flex items-center justify-center" aria-hidden="true">
                <span className="text-[10px] font-sans tracking-widest text-[var(--text-muted)] origin-center -rotate-90 whitespace-nowrap opacity-50 uppercase">
                  PROJECT / 0{index + 1}
                </span>
              </div>
              
              <div className="md:col-span-11 flex flex-col gap-6 md:gap-8">
                <div className="space-y-3">
                  <span className="text-[10px] md:text-xs font-sans tracking-[0.3em] uppercase text-[var(--accent)] font-bold">
                    {project.period || "Featured Project"}
                  </span>
                  <h3 id={`project-title-${index}`} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--text)] leading-tight">
                    {project.title}
                  </h3>
                </div>

                <div className="h-px bg-[var(--border)] w-full group-hover:bg-[var(--accent)]/30 transition-colors duration-500" aria-hidden="true"></div>

                <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 md:gap-12">
                  <div className="lg:col-span-6">
                    <p className="text-lg md:text-xl text-[var(--text-muted)] leading-relaxed font-light whitespace-pre-line">
                      {project.description}
                    </p>
                  </div>
                  
                  {project.technologies && (
                    <div className="lg:col-span-4 flex flex-col gap-3 md:gap-4 lg:pl-12 border-l border-transparent lg:border-[var(--border)]">
                      <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[var(--text-muted)] font-bold opacity-60">Tech Architecture</span>
                      <p className="text-sm text-[var(--text)] font-medium leading-relaxed">
                        {project.technologies}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Project Indicator (Editorial Style) */}
            <div className="absolute top-0 -left-6 md:-left-12 w-px h-0 bg-[var(--accent)] group-hover:h-full transition-all duration-1000 ease-in-out hidden md:block" aria-hidden="true"></div>
          </article>
        ))}
      </div>
    </section>
  );
}

