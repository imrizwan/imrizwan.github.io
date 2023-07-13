"use client";
import DownloadResume from "./DownloadResume";
import {
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
  FaEnvelope,
} from "react-icons/fa";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function Home() {
  const scrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex items-center justify-center h-screen bg-blue-900 flex-col">
      <div className="text-center">
        <h1 className="text-6xl text-white font-bold mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-2xl text-white mb-10">
          Full Stack Developer | Specializing in Backend
        </p>
      </div>
      <DownloadResume />
      <div className="flex justify-center space-x-4 mt-8">
        <a
          href="https://linkedin.com/in/mrizwanshaikh"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-3xl text-white" />
        </a>
        <a href="https://github.com/imrizwan" target="_blank" rel="noreferrer">
          <FaGithub className="text-3xl text-white" />
        </a>
        <a
          href="https://stackoverflow.com/users/razzyshaikh"
          target="_blank"
          rel="noreferrer"
        >
          <FaStackOverflow className="text-3xl text-white" />
        </a>
        <a href="mailto:your-razzyshaikh@gmail.com">
          <FaEnvelope className="text-3xl text-white" />
        </a>
      </div>
      <div className="mt-10">
        <span onClick={scrollDown}>
          <button>
            <FaAngleDoubleDown className="text-4xl text-white animate-bounce" />
          </button>
        </span>
      </div>
    </section>
  );
}
