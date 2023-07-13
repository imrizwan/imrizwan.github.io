import { FaAward } from "react-icons/fa";

const honors = [
  {
    title: "University Ambassador (1)",
    year: "2016 - 2017",
    institution: "Sindh Madressatul Islam University"
  },
  {
    title: "Sponsored Trip to Turkiye",
    year: "2019",
    institution: "Sindh Madressatul Islam University"
  },
  {
    title: "Merit Based Scholarship",
    year: "2019",
    institution: "Sindh Madressatul Islam University"
  },
  {
    title: "University Ambassador (2)",
    year: "2019 - 2020",
    institution: "Sindh Madressatul Islam University"
  }
];

export default function Honors() {
  return (
    <section className="py-6 px-4">
      <h2 className="text-4xl font-bold mb-4"><FaAward className="inline-block mr-2"/> Honor Awards</h2>
      {honors.map((honor, index) => (
        <div key={index} className="mb-5 bg-white shadow-lg rounded-md p-5">
          <div className="flex items-center mb-2">
            <FaAward className="mr-2 text-yellow-500" />
            <h3 className="text-xl font-bold">{honor.title}</h3>
          </div>
          <p>
            <span className="font-bold">Year: </span>
            {honor.year}
          </p>
          <p>
            <span className="font-bold">Institution: </span>
            {honor.institution}
          </p>
        </div>
      ))}
    </section>
  );
}
