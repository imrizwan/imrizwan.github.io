import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    shortDescription: 'Short description of project 1.',
    longDescription: 'Detailed description of project 1.',
    imageUrl: '/project1.jpg',
  },
  {
    id: 2,
    title: 'Project 2',
    shortDescription: 'Short description of project 2.',
    longDescription: 'Detailed description of project 2.',
    imageUrl: '/project2.jpg',
  },
  {
    id: 3,
    title: 'Project 3',
    shortDescription: 'Short description of project 3.',
    longDescription: 'Detailed description of project 3.',
    imageUrl: '/project3.jpg',
  },
  {
    id: 3,
    title: 'Project 3',
    shortDescription: 'Short description of project 3.',
    longDescription: 'Detailed description of project 3.',
    imageUrl: '/project3.jpg',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">Projects by Rizwan</h2>
        <div className="border-b-4 border-blue-500 w-24 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.shortDescription}</p>
                <p className="text-gray-600 mb-4">{project.longDescription}</p>
                <div className="flex">
                  <button className="bg-blue-500 text-white px-4 py-2 mr-4 rounded hover:bg-blue-600">
                    View More
                  </button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    Visit Site
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
