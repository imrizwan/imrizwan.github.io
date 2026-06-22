import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import data from "../data.json";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "CV",
  description: `Curriculum Vitae of ${data.personal_information.full_name}, ${data.personal_information.title}.`,
};

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

/** Format an ISO-ish date ("2025-05-01") to "May 2025"; pass through "Present". */
function fmtDate(value: string): string {
  if (!value || value === "Present") return value || "";
  const [year, month] = value.split("-");
  const m = Number(month);
  return m >= 1 && m <= 12 ? `${MONTHS[m - 1]} ${year}` : year;
}

export default function CVPage() {
  const { personal_information: p, skills, work_experience, education, projects, certifications_and_awards, languages, about } = data;

  return (
    <div className="min-h-screen bg-slate-100 print:bg-white">
      {/* Screen-only toolbar */}
      <div className="print:hidden sticky top-0 z-10 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors"
          >
            <FaArrowLeft aria-hidden="true" className="text-xs" />
            Back to portfolio
          </Link>
          <PrintButton />
        </div>
      </div>

      {/* Resume sheet */}
      <article className="max-w-4xl mx-auto bg-white text-slate-800 px-8 sm:px-12 py-10 my-6 print:my-0 print:px-0 print:py-0 shadow-sm print:shadow-none">
        {/* Header */}
        <header className="border-b-2 border-slate-900 pb-5 mb-6">
          <h1 className="font-serif text-4xl sm:text-5xl text-slate-900 leading-none">
            {p.full_name}
          </h1>
          <p className="text-lg text-blue-700 font-medium mt-2">{p.title}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-sm text-slate-600">
            <span>{p.location.city}, {p.location.country}</span>
            <span aria-hidden="true">•</span>
            <span>{p.contact.phone}</span>
            <span aria-hidden="true">•</span>
            <a href={`mailto:${p.contact.email}`} className="hover:text-blue-600">{p.contact.email}</a>
            <span aria-hidden="true">•</span>
            <a href={p.profiles.linkedin} className="hover:text-blue-600">LinkedIn</a>
            <span aria-hidden="true">•</span>
            <a href={p.profiles.github} className="hover:text-blue-600">GitHub</a>
            <span aria-hidden="true">•</span>
            <a href={p.profiles.portfolio} className="hover:text-blue-600">Portfolio</a>
          </div>
        </header>

        <Section title="Summary">
          <p className="text-sm leading-relaxed text-slate-700">{about}</p>
        </Section>

        <Section title="Experience">
          <div className="flex flex-col gap-5">
            {work_experience.map((w, i) => (
              <div key={i} className="break-inside-avoid">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-4">
                  <h3 className="font-semibold text-slate-900">{w.role}</h3>
                  <span className="text-xs text-slate-500 whitespace-nowrap">
                    {fmtDate(w.start_date)} – {fmtDate(w.end_date)}
                  </span>
                </div>
                <p className="text-sm text-blue-700">
                  {w.company} · {w.location.city}, {w.location.country}
                </p>
                <ul className="mt-1.5 list-disc pl-5 text-sm text-slate-700 space-y-0.5 marker:text-blue-600">
                  {w.responsibilities.map((r, j) => (
                    <li key={j}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Education">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-4 break-inside-avoid">
            <div>
              <h3 className="font-semibold text-slate-900">{education.degree}</h3>
              <p className="text-sm text-blue-700">
                {education.institution} · {education.location.city}, {education.location.country}
              </p>
            </div>
            <span className="text-xs text-slate-500 whitespace-nowrap">
              {education.start_year} – {education.end_year}
            </span>
          </div>
        </Section>

        <Section title="Skills">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="break-inside-avoid">
                <dt className="text-xs font-bold uppercase tracking-wider text-slate-900 capitalize">
                  {category.replace(/_/g, " ")}
                </dt>
                <dd className="text-sm text-slate-700">{items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section title="Selected Projects">
          <div className="flex flex-col gap-4">
            {projects.map((pr, i) => (
              <div key={i} className="break-inside-avoid">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-4">
                  <h3 className="font-semibold text-slate-900">{pr.title}</h3>
                  {pr.period && (
                    <span className="text-xs text-slate-500 whitespace-nowrap">{pr.period}</span>
                  )}
                </div>
                <p className="text-sm text-slate-700 whitespace-pre-line mt-0.5">{pr.description}</p>
                {pr.technologies && (
                  <p className="text-xs text-slate-500 mt-1">
                    <span className="font-semibold">Tech:</span> {pr.technologies}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Section>

        <Section title="Certifications & Awards">
          <ul className="text-sm text-slate-700 space-y-1">
            {certifications_and_awards.map((c: any, i: number) => (
              <li key={i} className="flex justify-between gap-4">
                <span>
                  {c.title}
                  {c.event ? ` — ${c.event}` : ""}
                  {c.provider ? ` · ${c.provider}` : ""}
                  {c.organizer ? ` · ${c.organizer}` : ""}
                </span>
                <span className="text-slate-500 whitespace-nowrap">{c.year}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Languages">
          <p className="text-sm text-slate-700">
            {languages
              .map((l: any) => `${l.language} (${l.level || "Professional proficiency"})`)
              .join(" · ")}
          </p>
        </Section>
      </article>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-6 break-inside-avoid">
      <h2 className="font-serif text-lg text-slate-900 uppercase tracking-wide border-b border-slate-300 pb-1 mb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}
