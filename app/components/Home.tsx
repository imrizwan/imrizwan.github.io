"use client";
import data from "../data.json";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] md:min-h-[70vh] text-center px-6" aria-label="Hero section">
      <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-6 md:mb-8 leading-[0.9] tracking-tighter">
          {data.personal_information.full_name.split(' ')[0]} <br />
          <span className="text-[var(--text-muted)] mt-1 block italic opacity-60" aria-hidden="true">{data.personal_information.full_name.split(' ').slice(1).join(' ')}</span>
          <span className="sr-only">{data.personal_information.full_name}</span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-[var(--text-muted)] font-light max-w-3xl mx-auto leading-relaxed px-4">
          {data.personal_information.title} with {data.personal_information.experience_years} years of experience in architectural precision and backend excellence.
        </p>

        <div className="mt-10 md:mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          <span className="inline-flex items-center gap-2.5 text-[10px] md:text-xs font-sans tracking-[0.25em] uppercase text-[var(--text)] font-bold">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 motion-safe:animate-ping"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Open to opportunities
          </span>
          <span className="h-4 w-px bg-[var(--border)] hidden sm:block" aria-hidden="true"></span>
          <span className="text-[10px] md:text-xs font-sans tracking-[0.25em] uppercase text-[var(--accent)] font-bold">
            Based in {data.personal_information.location.city}, {data.personal_information.location.country}
          </span>
        </div>
      </div>
    </section>
  );
}

