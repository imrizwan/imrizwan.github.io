import data from "../data.json";

export default function Experience() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 md:py-20 border-t border-[var(--border)]">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--text)]">
            Experience
          </h2>
          <p className="text-[var(--text-muted)] font-light max-w-xs mt-4">
            My professional journey through software engineering and leadership.
          </p>
        </div>
        
        <div className="md:col-span-8 space-y-24">
          {data.work_experience.map((experience, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h3 className="text-3xl md:text-4xl text-[var(--text)] group-hover:text-[var(--accent)] transition-colors duration-300">
                    {experience.role}
                  </h3>
                  <span className="text-sm font-sans tracking-widest uppercase text-[var(--text-muted)]">
                    {experience.start_date} - {experience.end_date}
                  </span>
                </div>
                
                <div className="flex flex-col gap-1">
                  <p className="text-xl text-[var(--text)] font-medium">
                    {experience.company}
                  </p>
                  <p className="text-base text-[var(--text-muted)] font-light italic">
                    {experience.location.city}, {experience.location.country}
                  </p>
                </div>
                
                {experience.department && (
                  <p className="text-lg text-[var(--text-muted)] font-light max-w-2xl leading-relaxed italic">
                    Department: {experience.department}
                  </p>
                )}
                
                <ul className="grid sm:grid-cols-2 gap-4 mt-4">
                  {experience.responsibilities.map((task, idx) => (
                    <li key={idx} className="flex gap-3 text-base text-[var(--text-muted)] font-light leading-snug">
                      <span className="text-[var(--accent)] mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"></span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute -left-12 top-0 bottom-0 w-px bg-[var(--border)] hidden md:block group-hover:bg-[var(--accent)] transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Subsection */}
      <div className="grid md:grid-cols-12 gap-12 mt-32 pt-20 border-t border-[var(--border)]">
        <div className="md:col-span-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[var(--text)]">
            Education
          </h2>
        </div>
        <div className="md:col-span-8">
          <div className="group relative">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h3 className="text-2xl md:text-3xl text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                  {data.education.degree}
                </h3>
                <span className="text-sm font-sans tracking-widest uppercase text-[var(--text-muted)]">
                  {data.education.start_year} - {data.education.end_year}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg text-[var(--text)] font-medium">
                  {data.education.institution}
                </p>
                <p className="text-base text-[var(--text-muted)] font-light italic">
                  {data.education.location.city}, {data.education.location.country}
                </p>
              </div>
              {data.education.website && (
                <a 
                  href={data.education.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--accent)] hover:underline mt-2"
                >
                  Visit Institution Website
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


