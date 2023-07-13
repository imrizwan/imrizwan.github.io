import { FaCertificate } from "react-icons/fa";

const certificates = [
  {
    title: "Udacity React Nanodegree",
    year: "2020",
    link: "https://confirm.udacity.com/TNDFUL2",
  },
  {
    title: "CMAD (Certified Mobile Application Developer)",
    year: "2017",
    link: null,
  },
];

export default function Certificates() {
  return (
    <section className="py-6 px-4">
      <h2 className="text-4xl font-bold mb-4"><FaCertificate className="inline-block mr-2"/> Certificates</h2>
      {certificates.map((certificate, index) => (
        <div
          key={index}
          className="mb-5 bg-white shadow-lg rounded-md p-5"
        >
          <div className="flex items-center mb-2">
            <FaCertificate className="mr-2 text-blue-500"/>
            <h3 className="text-xl font-bold">{certificate.title}</h3>
          </div>
          <p>
            <span className="font-bold">Year: </span>
            {certificate.year}
          </p>
          {certificate.link && 
            <p>
              <span className="font-bold">Link: </span>
              <a 
                href={certificate.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline"
              >
                View Certificate
              </a>
            </p>
          }
        </div>
      ))}
    </section>
  );
}
