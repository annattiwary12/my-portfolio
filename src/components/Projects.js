import React from 'react';

const projects = [
  {
    title: "VoteUp",
    description: "Revolutionizing Voter Engagement",
    role: "Developer/Team Member",
    link: "https://github.com/your-username/voteup"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio to showcase professional accomplishments",
    role: "Sole Developer & Designer",
    link: "https://github.com/your-username/portfolio"
  }

  
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 text-black">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center mb-8">Projects</h2>
        <div className="flex flex-wrap -mx-4">
          {projects.map((project, index) => (
            <div key={index} className="md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl mb-2">{project.title}</h3>
                <p className="mb-2">{project.description}</p>
                <p className="mb-2"><strong>Team:</strong> {project.team}</p>
                <p className="mb-2"><strong>Role:</strong> {project.role}</p>
                <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
