import data from "../data.json";
import {
  FaNode,
  FaReact,
  FaSass,
  FaAws,
  FaDocker,
  FaGitSquare,
  FaHtml5,
  FaCss3,
  FaGithub,
  FaGitlab,
  FaBitbucket,
} from "react-icons/fa";
import {
  SiRedux,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiNextdotjs,
  SiGooglecloud,
  SiHeroku,
  SiKubernetes,
  SiOracle,
  SiApachekafka,
  SiRabbitmq,
  SiExpress,
  SiNestjs,
  SiMongoose,
  SiPwa,
  SiRedis,
  SiPostman,
  SiTestinglibrary,
} from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import { AiOutlineSolution } from "react-icons/ai";
import { MdDataObject } from "react-icons/md";

export default function Skills() {
  const iconMap: Record<string, any> = {
    // Frontend
    "ReactJS": <FaReact />,
    "Next.js": <SiNextdotjs />,
    "Redux": <SiRedux />,
    "Progressive Web Applications": <SiPwa />,
    "HTML5": <FaHtml5 />,
    "CSS": <FaCss3 />,
    "SCSS": <FaSass />,
    
    // Backend
    "Node.js": <FaNode />,
    "NestJS": <SiNestjs />,
    "Express.js": <SiExpress />,
    "NATS": <AiOutlineSolution />,
    "TypeORM": <MdDataObject />,
    "Mongoose": <SiMongoose />,
    "Knex.js": <MdDataObject />,
    "Sequelize": <MdDataObject />,
    "Apache Kafka": <SiApachekafka />,
    "RabbitMQ": <SiRabbitmq />,
    "Unit Testing": <SiTestinglibrary />,
    "Postman": <SiPostman />,
    
    // Databases
    "MongoDB": <SiMongodb />,
    "PostgreSQL": <SiPostgresql />,
    "MySQL": <SiMysql />,
    "SQL": <SiMysql />,
    
    // Cloud & DevOps
    "Docker": <FaDocker />,
    "Kubernetes": <SiKubernetes />,
    "Microservices": <MdDataObject />,
    "Redis": <SiRedis />,
    "Oracle Cloud": <SiOracle />,
    "AWS": <FaAws />,
    "Google Cloud Platform": <SiGooglecloud />,
    "Heroku": <SiHeroku />,
    "CI/CD": <VscAzureDevops />,
    
    // Languages
    "JavaScript": <SiJavascript />,
    "TypeScript": <SiTypescript />,
    "Object-Oriented Programming": <MdDataObject />,
    
    // Misc
    "GitHub": <FaGithub />,
    "GitLab": <FaGitlab />,
    "Bitbucket": <FaBitbucket />,
    "JSON": <MdDataObject />,
    "Software Design Patterns": <AiOutlineSolution />,
    "SOLID Principles": <AiOutlineSolution />,
  };

  const categories = Object.keys(data.skills) as Array<keyof typeof data.skills>;

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 md:py-20 border-t border-[var(--border)]" aria-label="Technical Skills">
      <div className="grid-layout">
        <div className="md:col-span-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--text)] mb-4">
            Expertise
          </h2>
          <p className="text-[var(--text-muted)] font-light max-w-xs text-base md:text-lg">
            A comprehensive set of tools and technologies I use to build modern software.
          </p>
        </div>
        
        <div className="md:col-span-8 flex flex-col gap-12">
          {categories.map((category) => (
            <div key={category} className="flex flex-col gap-6">
              <h3 className="text-xl md:text-2xl font-sans tracking-[0.2em] uppercase text-[var(--accent)] opacity-80 border-b border-[var(--border)] pb-2">
                {category.replace("_", " ")}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6" aria-label={`${category.replace("_", " ")} skills`}>
                {data.skills[category].map((skill) => (
                  <li
                    className="group flex items-start gap-4 p-4 rounded-lg hover:bg-white dark:hover:bg-slate-900 transition-all duration-300 border border-transparent hover:border-[var(--border)] hover:shadow-sm"
                    key={skill}
                  >
                    <div className="text-2xl text-[var(--accent)] shrink-0 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                      {iconMap[skill] || <AiOutlineSolution />}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm md:text-base font-medium text-[var(--text)] leading-tight break-words">{skill}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

