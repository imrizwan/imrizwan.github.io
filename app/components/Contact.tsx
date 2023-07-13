import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactMe() {
  return (
    <section className="flex flex-col items-center justify-center pt-4 pb-4">
      <h2 className="text-4xl font-bold mb-8 text-black">Hire Me</h2>
      <div className="flex items-center gap-8 text-white text-lg">
        <a
          href="mailto:razzyshaikh@gmail.com"
          className="flex items-center gap-2 text-black"
        >
          <FaEnvelope />
          razzyshaikh@gmail.com
        </a>
        <div className="flex items-center gap-2 text-black">
          <FaPhoneAlt />
          +971 (58) 805-1568
        </div>
        <a
          href="https://linkedin.com/in/mrizwanshaikh"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-blue-300 text-black"
        >
          <FaLinkedin />
          LinkedIn
        </a>
        <a
          href="https://github.com/imrizwan"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-blue-300 text-black"
        >
          <FaGithub />
          GitHub
        </a>
      </div>
    </section>
  );
}
