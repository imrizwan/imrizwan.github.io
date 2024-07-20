'use client'
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import data from '../../data/profile.json'

export default function Home() {
  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const skills = useRef(null);
  const contact = useRef(null);

  const scrollToHome = () => {
    if (home.current) {
      home.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    if (about.current) {
      about.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    if (projects.current) {
      projects.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const scrollToSkills = () => {
    if (skills.current) {
      skills.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const scrollToContact = () => {
    if (contact.current) {
      contact.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      <div>
        <Navbar homeRef={home} scroll={{
          scrollToHome,
          scrollToAbout,
          scrollToProjects,
          scrollToSkills,
          scrollToContact
        }} data={data} />
        <Intro aboutRef={about} />
        <Projects projectsRef={projects} data={data} />
        <Skills skillsRef={skills} />
        <Footer contactRef={contact} />
      </div>
    </main>
  );
}
