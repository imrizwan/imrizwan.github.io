import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Nodejs Developer",
      company: "TNC IT GROUP",
      duration: "03/2022 - Present",
      location: "Dubai, UAE",
      description:
        "Blockchain development and security services provider with 500+ blockchain developers working all around the world.",
      tasks: [
        "Responsible for managing the interchange of data between the server and the users",
        "Work as part of a team developing applications and services using Agile development methods",
        "Build customer-facing UI and back-end services",
        "Code, test and operate node.js based services",
        "Eﬀectively use tools and ingenuity to identify and ﬁx defects before they become a problem",
        "Analyse customer needs and developing overall concept and design objectives",
        "Create software in a variety of programming and for a variety of IT software applications",
        "Debugging and correcting errors in computer programs",
      ],
    },
    {
      id: 2,
      title: "Software Engineer (II)",
      company: "Digital Dividend",
      duration: "02/2021 - 01/2022",
      location: "Karachi, Pakistan",
      description: "Web and mobile development services provider",
      tasks: [
        "Worked for 2 years and got experience to work technologies based on javascript",
        "Reactjs, Nodejs, Javascript, Typescript and Docker were my main technologies",
        "Managed and worked with team of developers and completed many projects with them",
      ],
    },
    // Add more experiences as needed
  ];

  return (
    <section className="py-6 px-4">
      <h2 className="text-4xl font-bold mb-4"><FaBriefcase className="inline-block mr-2"/> Work Experience</h2>
      {experiences.map((experience) => (
        <div
          key={experience.id}
          className="mb-5 bg-white shadow-lg rounded-md p-5"
        >
          <div className="flex items-center mb-2">
            <FaBriefcase className="mr-2" />
            <h3 className="text-xl font-bold">{experience.title}</h3>
          </div>
          <p>
            <span className="font-bold">Company: </span>
            {experience.company}
          </p>
          <p>
            <span className="font-bold">Duration: </span>
            {experience.duration}
          </p>
          <p>
            <span className="font-bold">Location: </span>
            {experience.location}
          </p>
          <p>
            <span className="font-bold">Description: </span>
            {experience.description}
          </p>
          <ul className="list-disc pl-5">
            {experience.tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
