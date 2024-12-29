import React from "react";

const Skills = () => {
  // Technologies Used - Left Side
  const technologies = [
    { name: "HTML", description: "Markup language for web pages" },
    { name: "CSS", description: "Style sheet language for web design" },
    { name: "JavaScript", description: "Programming language for dynamic web pages" },
    { name: "React", description: "Library for building user interfaces" },
    { name: "Node.js", description: "JavaScript runtime for server-side scripting" },
    { name: "MongoDB", description: "NoSQL database for web applications" },
    { name: "MySQL", description: "Relational database management system" },
    { name: "Python", description: "Programming language for general-purpose coding" },
    { name: "Postman", description: "API client for testing and development" },
    { name: "Express.js", description: "Web application framework for Node.js" },
    { name: "Git", description: "Version control system for tracking changes in code" },
    { name: "Testfully", description: "Using an API client for testing and development" },
    { name: "Netlify", description: "Hosting platform for web projects" },
    { name: "Render", description: "Cloud platform for hosting web applications" },
    { name: "R", description: "Programming language for statistical computing" },

  ];

  // Technical Skills - Right Side
  const technicalSkills = [
    { name: "Web Development", description: "Building and maintaining websites" },
    { name: "Full Stack Development", description: "Front-end and back-end development" },
    { name: "Database Management", description: "Designing, implementing, and managing databases" },
    { name: "Cloud Computing", description: "Managing and utilizing cloud resources" },
    { name: "Machine Learning", description: "Building models and algorithms for AI" },
    { name: "DevOps", description: "Software development and IT operations collaboration" },
  ];

  return (
    <div className="w-full py-20 bg-gray-900 text-white" id="skills">
      <h2 className="text-4xl text-center font-oswald mb-12">Skills</h2>

      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* Technologies Used Section - Left Side */}
        <div className="w-full md:w-1/2">
          <h3 className="text-xl font-semibold text-center mb-4">Technologies I Used</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-lg rounded-lg border-l-4 border-amber-500"
              >
                <h4 className="text-lg font-semibold text-gray-800">{tech.name}</h4>
                <p className="text-sm text-gray-600 mt-2">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills Section - Right Side */}
        <div className="w-full md:w-1/2">
          <h3 className="text-xl font-semibold text-center mb-4">Technical Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-lg rounded-lg border-l-4 border-amber-500"
              >
                <h4 className="text-lg font-semibold text-gray-800">{skill.name}</h4>
                <p className="text-sm text-gray-600 mt-2">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
