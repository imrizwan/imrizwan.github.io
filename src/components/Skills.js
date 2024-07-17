import { FaReact, FaNodeJs, FaDatabase, FaCloud, FaCode, FaTools } from 'react-icons/fa';

const skills = [
  {
    category: "Frontend",
    icon: <FaReact className="text-4xl text-blue-500 mb-2" />,
    skills: [
      "ReactJS",
      "Nextjs",
      "Redux",
      "JQuery",
      "Progressive Web Applications",
      "HTML5",
      "CSS/SCSS",
      "Material UI",
      "Bootstrap"
    ],
    description: "Developing modern, responsive, and dynamic user interfaces using ReactJS, Nextjs, and Redux, along with other frontend technologies like HTML5, CSS/SCSS, and popular UI frameworks such as Material UI and Bootstrap."
  },
  {
    category: "Backend",
    icon: <FaNodeJs className="text-4xl text-green-500 mb-2" />,
    skills: [
      "Nodejs",
      "Nestjs",
      "Firebase",
      "Apache Kafka",
      "RabittMQ",
      "NATS",
      "Expressjs",
      "TypeORM",
      "Mongoose",
      "Knexjs",
      "Sequelize",
      "Unit Testing",
      "Postman"
    ],
    description: "Building robust backend applications using Node.js and NestJS, with experience in various frameworks and tools for database interactions, messaging, and API testing."
  },
  {
    category: "Database",
    icon: <FaDatabase className="text-4xl text-yellow-500 mb-2" />,
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "SQL"
    ],
    description: "Managing and designing databases using MongoDB, PostgreSQL, MySQL, and general SQL knowledge to ensure data integrity and efficient data retrieval."
  },
  {
    category: "Cloud & DevOps",
    icon: <FaCloud className="text-4xl text-purple-500 mb-2" />,
    skills: [
      "Docker",
      "Kubernetes",
      "Microservices",
      "Redis",
      "Oracle Cloud",
      "Amazon Web Services",
      "Google Cloud Platform",
      "Heroku",
      "CI/CD"
    ],
    description: "Deploying and managing applications using Docker, Kubernetes, and various cloud platforms like AWS, GCP, and Oracle Cloud. Implementing CI/CD pipelines to streamline development workflows."
  },
  {
    category: "Languages",
    icon: <FaCode className="text-4xl text-red-500 mb-2" />,
    skills: [
      "JavaScript",
      "TypeScript",
      "Object-Oriented Programming"
    ],
    description: "Proficient in JavaScript and TypeScript for both frontend and backend development, with a strong foundation in Object-Oriented Programming principles."
  },
  {
    category: "Miscellaneous",
    icon: <FaTools className="text-4xl text-gray-500 mb-2" />,
    skills: [
      "Git",
      "Github",
      "Gitlab",
      "Bitbucket",
      "JSON",
      "API Integrations",
      "Clickup",
      "Trello",
      "YAML",
      "Software Design Patterns"
    ],
    description: "Experienced with version control systems, project management tools, and software design patterns to maintain code quality and project organization."
  }
];

const Skills = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">Skills</h2>
        <div className="border-b-4 border-blue-500 w-24 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <div className="flex flex-col items-center">
                {skill.icon}
                <h3 className="text-xl font-bold mb-2">{skill.category}</h3>
                <div className="border-b-2 border-blue-500 w-12 mb-4"></div>
                <p className="text-gray-700 mb-4">{skill.description}</p>
                <ul className="list-disc list-inside text-gray-600">
                  {skill.skills.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
