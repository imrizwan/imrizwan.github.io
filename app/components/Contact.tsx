import data from "../data.json";

export default function ContactMe() {
  const { contact, profiles } = data.personal_information;

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-24" aria-label="Contact Information">
      <div className="flex flex-col gap-10 text-center items-center">
        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[var(--text)]">
          Let&apos;s <span className="italic opacity-60">Connect</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-[var(--text-muted)] font-light max-w-2xl leading-relaxed">
          I&apos;m currently open to new opportunities and interesting collaborations. Feel free to reach out via any of the channels below.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full mt-12">
          <a
            href={`mailto:${contact.email}`}
            className="premium-card flex flex-col gap-4 text-left group"
            aria-label={`Send an email to ${contact.email}`}
          >
            <span className="text-xs font-sans tracking-widest uppercase text-[var(--text-muted)] font-bold">Email</span>
            <span className="text-lg font-medium group-hover:text-[var(--accent)] transition-colors line-clamp-1">{contact.email}</span>
          </a>
          
          <div className="premium-card flex flex-col gap-4 text-left" role="article" aria-label="Phone and WhatsApp contact">
            <span className="text-xs font-sans tracking-widest uppercase text-[var(--text-muted)] font-bold">Phone / WhatsApp</span>
            <span className="text-lg font-medium">{contact.phone}</span>
          </div>

          <a
            href={profiles.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-card flex flex-col gap-4 text-left group"
            aria-label="Visit LinkedIn profile (opens in new tab)"
          >
            <span className="text-xs font-sans tracking-widest uppercase text-[var(--text-muted)] font-bold">LinkedIn</span>
            <span className="text-lg font-medium group-hover:text-[var(--accent)] transition-colors italic leading-none">Connect on LinkedIn</span>
          </a>

          <a
            href={profiles.github}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-card flex flex-col gap-4 text-left group"
            aria-label="Visit GitHub profile (opens in new tab)"
          >
            <span className="text-xs font-sans tracking-widest uppercase text-[var(--text-muted)] font-bold">GitHub</span>
            <span className="text-lg font-medium group-hover:text-[var(--accent)] transition-colors italic leading-none">View Codebases</span>
          </a>
        </div>
      </div>
    </section>
  );
}
