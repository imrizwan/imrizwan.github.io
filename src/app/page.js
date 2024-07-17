import Image from "next/image";
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <Intro />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </main>
  );
}
