import Navigation from "./components/Navigation";
import SiteFooter from "./components/SiteFooter";
import Reveal from "./components/Reveal";
import { sections } from "./components/sections";

import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Awards from "./components/Awards";
import Languages from "./components/Languages";
import Contact from "./components/Contact";

// Statically rendered (server-side) so all section content is in the initial
// HTML — crawlable and deep-linkable, unlike the previous ssr:false tabs.
const sectionComponents: Record<string, React.ComponentType> = {
  home: Home,
  about: About,
  skills: Skills,
  experience: Experience,
  projects: Projects,
  certificates: Certificates,
  awards: Awards,
  languages: Languages,
  contact: Contact,
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navigation />

      <main id="main-content" className="flex-1">
        {sections.map(({ id }) => {
          const Section = sectionComponents[id];
          // The hero reveals on load; later sections reveal on scroll.
          const content =
            id === "home" ? <Section /> : (
              <Reveal>
                <Section />
              </Reveal>
            );
          return (
            <div key={id} id={id} data-section>
              {content}
            </div>
          );
        })}
      </main>

      <SiteFooter />
    </div>
  );
}
