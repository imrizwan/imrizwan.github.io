import {
  FaNode,
  FaReact,
  FaSass,
  FaAws,
  FaApple,
  FaAngular,
  FaVuejs,
  FaDocker,
  FaLinux,
  FaGitSquare,
  FaHtml5,
  FaCss3,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiRedux,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiWebpack,
  SiNextdotjs,
  SiNginx,
  SiGooglecloud,
  SiJquery,
  SiHeroku,
  SiDigitalocean,
  SiAzurepipelines,
  SiKubernetes,
  SiAzureartifacts,
  SiMaterialdesign,
  SiSocketdotio,
  SiOracle,
  SiJsonwebtokens,
  SiYaml,
  SiApachekafka,
  SiRabbitmq,
  SiBabel,
  SiExpress,
  SiNestjs,
  SiMongoose,
  SiReact,
  SiWeb3Dotjs,
  SiPwa,
} from "react-icons/si";

import { BsBarChartSteps } from "react-icons/bs";
import { GrTest, GrCycle } from "react-icons/gr";
import { AiOutlineSolution } from "react-icons/ai";
import { MdDataObject } from "react-icons/md";

export default function Skills() {
  const skills: Record<string, any> = {
    "Node.js": <FaNode />,
    "React.js": <FaReact />,
    "Redux/Context API": <SiRedux />,
    MongoDB: <SiMongodb />,
    Babel: <SiBabel />,
    "Nest.js": <SiNestjs />,
    "Express.js": <SiExpress />,
    "Next.js/Gatsby.js/Nuxt.js": <SiNextdotjs />,
    "HTML/CSS": <FaHtml5 />,
    "LESS/SCSS/SASS": <FaSass />,
    "CI/CD": <SiAzurepipelines />,
    "Linux/Windows": <FaLinux />,
    "Amazon Web Services": <FaAws />,
    MacOS: <FaApple />,
    Nginx: <SiNginx />,
    Angular: <FaAngular />,
    "React Hooks": <SiReact />,
    "Web3.0": <SiWeb3Dotjs />,
    "Javascript (ES5, ES6 and Others)": <SiJavascript />,
    "SQL (MySQL, PostgreSQL)": <SiMysql />,
    JQuery: <SiJquery />,
    "Vue.js": <FaVuejs />,
    Docker: <FaDocker />,
    "Mongoose/TypeORM/Sequelize etc": <SiMongoose />,
    "WebSocket/Socket.IO": <SiSocketdotio />,
    Typescript: <SiTypescript />,
    Webpack: <SiWebpack />,
    "Bootstrap/Tailwind CSS/Ant Design/Material UI": <SiMaterialdesign />,
    "SPA/PWA": <SiPwa />,
    "Oracle Cloud": <SiOracle />,
    "Problem Solving": <AiOutlineSolution />,
    "JSON/YAML": <SiJsonwebtokens />,
    "Google Cloud": <SiGooglecloud />,
    Kafka: <SiApachekafka />,
    RabbitMQ: <SiRabbitmq />,
    "Azure/Heroku/DigitalOcean": <SiAzureartifacts />,
    "TDD (Mocha/Chai/Jest etc)": <GrTest />,
    Firebase: <SiFirebase />,
    "Agile Methodology": <GrCycle />,
    "Git (Github/Bitbucket/Gitlab)": <FaGitSquare />,
    "Object Oriented/Functional/Structural Programming": <MdDataObject />,
    "ApexCharts.js, Chart.js, Recharts, and Highcharts": <BsBarChartSteps />,
  };

  return (
    <section className="px-6 py-12">
      <h2 className="text-4xl font-bold">My Skills</h2>
      <div className="mt-8 flex flex-wrap justify-between">
        {Object.keys(skills).map((skill) => (
          <div
            className="p-2 m-2 bg-white rounded-lg shadow-md flex items-center"
            key={skill}
          >
            <span className="mr-2">{skills[skill]}</span>
            <p className="text-sm font-bold">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
