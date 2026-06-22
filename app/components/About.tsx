import data from "../data.json";

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 md:py-20" aria-label="About me">
      <div className="grid-layout">
        <div className="md:col-span-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--text)] mb-6 md:mb-0">
            About
          </h2>
        </div>
        <div className="md:col-span-8 flex flex-col gap-6 md:gap-8">
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-[var(--text)] leading-snug md:leading-tight">
            {data.personal_information.title} dedicated to modernizing enterprise applications and building high-performance digital products.
          </p>
          <div className="h-px bg-[var(--border)] w-16 md:w-24" aria-hidden="true"></div>
          <article className="flex flex-col gap-5 md:gap-6 text-base md:text-lg text-[var(--text-muted)] leading-relaxed font-light">
            <p>
              {data.about}
            </p>
            <p>
              I take a holistic approach to product development—from initial ideation and architecture to deployment and continuous optimization. I believe in software that is as thoughtful as it is functional.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

