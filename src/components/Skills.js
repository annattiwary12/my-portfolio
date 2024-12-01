import React from 'react';
import ProgressBar from './ProgressBar'; // Import the ProgressBar component

 
const skills = [
  { 
    category: "Programming Languages", 
    items: [
      { name: "Java", percentage: 80, logo: "/images/java-logo.png" },
      { name: "C", percentage: 70, logo: "/images/c-logo.png" },
      { name: "Python", percentage: 75, logo: "/images/python-logo.png" },
      { name: "SQL", percentage: 65, logo: "/images/sql-logo.png" },
      { name: "JavaScript", percentage: 85, logo: "/images/javascript-logo.png" },
      { name: "HTML", percentage: 90, logo: "/images/html-logo.png" },
      { name: "CSS", percentage: 85, logo: "/images/css-logo.png" }
    ] 
  },
  { 
    category: "Libraries/Frameworks", 
    items: [
      { name: "React.js", percentage: 80, logo: "/images/react-logo.png" },
      { name: "MongoDB", percentage: 70, logo: "/images/mongodb-logo.png" },
      { name: "Node.js", percentage: 75, logo: "/images/nodejs-logo.png" },
      { name: "Express.js", percentage: 65, logo: "/images/express-logo.png" },
      { name: "Mongoose", percentage: 60, logo: "/images/mongoose-logo.png" },
      { name: "Tailwind CSS", percentage: 70, logo: "/images/tailwind-logo.png" }
    ] 
  },
  { 
    category: "Tools/Platforms", 
    items: [
      { name: "VS Code", percentage: 90, logo: "/images/vscode-logo.png" },
      { name: "PyCharm", percentage: 80, logo: "/images/pycharm-logo.png" },
      { name: "IntelliJ IDEA", percentage: 75, logo: "/images/intellij-logo.png" },
      { name: "Git", percentage: 85, logo: "/images/git-logo.png" },
      { name: "GitHub", percentage: 80, logo: "/images/github-logo.png" },
      { name: "MySQL", percentage: 70, logo: "/images/mysql-logo.png" }
    ] 
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white text-black">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center mb-8">Skills</h2>
        <div className="flex flex-wrap -mx-4">
          {skills.map((skill, index) => (
            <div key={index} className="md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl mb-4">{skill.category}</h3>
                <div className="space-y-4">
                  {skill.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-4">
                      <img src={item.logo} alt={item.name} className="w-12 h-12 object-contain" />
                      <div className="flex-1">
                        <div className="text-lg font-semibold mb-2">{item.name}</div>
                        <ProgressBar percentage={item.percentage} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
