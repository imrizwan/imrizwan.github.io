import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Awards from "./components/Awards";
import Languages from "./components/Languages";

export default function HomePage() {
  return (
    <div className="bg-white">
      <Home />
      <div className="font-sans rounded-lg shadow-md m-[200px] bg-gray-100">
        <About />
        <Skills />
        <Experience />
        <Certificates />
        <Awards />
        <Projects />
        <Languages />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
