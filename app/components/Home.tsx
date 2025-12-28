"use client";
import data from "../data.json";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] md:min-h-[70vh] text-center px-6">
      <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-6 md:mb-8 leading-[0.9] tracking-tighter">
          {data.personal_information.full_name.split(' ')[0]} <br />
          <span className="text-[var(--text-muted)] mt-1 block italic opacity-60">{data.personal_information.full_name.split(' ').slice(1).join(' ')}</span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-[var(--text-muted)] font-light max-w-3xl mx-auto leading-relaxed px-4">
          {data.personal_information.title} with {data.personal_information.experience_years} years of experience in architectural precision and backend excellence.
        </p>
        
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="h-px bg-[var(--border)] w-12 md:w-20"></div>
          <span className="text-[10px] md:text-xs font-sans tracking-[0.4em] uppercase text-[var(--accent)] font-bold">Based in {data.personal_information.location.city}, {data.personal_information.location.country}</span>
          <div className="h-px bg-[var(--border)] w-12 md:w-20"></div>
        </div>
      </div>
    </section>
  );
}

