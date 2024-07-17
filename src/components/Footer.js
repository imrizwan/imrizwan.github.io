import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <p className="text-lg font-bold">Muhammad Rizwan</p>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/mrizwanshaikh" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-blue-500">
            <FaLinkedin />
          </a>
          <a href="https://github.com/imrizwan" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-gray-500">
            <FaGithub />
          </a>
          <a href="https://stackoverflow.com/users/6189301/rizwan" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-orange-500">
            <FaStackOverflow />
          </a>
        </div>
      </div>
      <hr className="my-4 border-gray-700" />
      <div className="text-center">
        <p>&copy; {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
