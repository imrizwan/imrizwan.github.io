import { FaProjectDiagram, FaTools } from "react-icons/fa";

export default function Projects() {
  // Data: An array of project objects
  const projects = [
    {
      title: "Red Sea Digital (CMS)",
      period: "03/2020 - 01/2021",
      description: `Created innovative CMS for Red Sea Digital (RSD), simplifying content management across multiple screens.
      Led development of RSD CMS, enhancing audience engagement and digital management capabilities.
      Delivered user-friendly interface for dynamic content scheduling and targeted messaging.`,
      technologies:
        "Nodejs, Reactjs, HTML, CSS, Javascript, Typescript, MongoDB, Firebase, Docker etc.",
    },
    {
      title: "CarHub",
      period: "03/2020 - 01/2022",
      description: `Created CarHub, a digitalized automotive service solution for convenient and quality car servicing.
      Integrated various service providers on a single platform, offering location, services, and pricing information.
      Streamlined the process of selecting service providers, enhancing the car service experience for users.`,
      technologies:
        "Nodejs, Reactjs, HTML, CSS, Javascript, Typescript, MongoDB, PostgreSQL, Firebase, Docker etc.",
    },
    {
      title: "Real Research & RR Store",
      period: "",
      description: `Architected and implemented the Real Research backend utilizing MongoDB, Node.js, Express.js, and other cutting-edge JavaScript technologies,
      including Mongoose ORM, Redis for caching, RabbitMQ for messaging, and Socket.io for real-time communication.
      Leveraged the power of asynchronous programming and event-driven architecture with technologies such as async/await, Promises, and event
      emitters, enhancing scalability and responsiveness.
      Integrated robust authentication and authorization mechanisms using technologies like Passport.js and JSON Web Tokens (JWT) to ensure secure
      access to Real Research services.`,
      technologies: "",
    },
    {
      title: "Steam-Coin",
      period: "",
      description: `Developed the StreamCoin blockchain app as a backend developer, leveraging technologies such as Ethereum, and web3.js for blockchain
      integration.
      Implemented smart contracts to enable secure and direct transactions between users and streamers, eliminating the need for intermediaries.
      Utilized Node.js, Express.js, and JavaScript to build the backend infrastructure, incorporating real-time communication and database technologies
      like WebSockets and MongoDB for seamless functionality and efficient data management.`,
      technologies: "",
    },
    {
      title: "Homeros Coin",
      period: "",
      description: "",
      technologies:
        "Ethereum blockchain, Solidity smart contract language, web3.js library, Node.js, Express.js, JavaScript, WebSockets, MongoDB",
    },
    {
      title: "Gera Coin",
      period: "",
      description: "",
      technologies:
        "Ethereum blockchain, Solidity smart contract language, web3.js library, Node.js, Express.js, JavaScript, WebSockets, MongoDB",
    },
  ];

  return (
    <section className="px-6 py-12">
    <h2 className="text-4xl font-bold mb-4"><FaProjectDiagram className="inline-block mr-2"/> My Projects</h2>
    <div className="mt-8 space-y-6">
      {projects.map((project, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <FaProjectDiagram className="mr-2 text-blue-500" />
            <h3 className="text-2xl font-bold">{project.title}</h3>
          </div>
          <p className="text-gray-500">{project.period}</p>
          <p className="mt-2">{project.description}</p>
          <div className="mt-2 flex items-center">
            <FaTools className="mr-2 text-yellow-500" />
            <p className="font-bold">Technologies used:</p>
          </div>
          {project.technologies && <p>{project.technologies}</p>}
        </div>
      ))}
    </div>
  </section>
  );
}
