import React from 'react';
import profilePic from '../assets/profile-pic.jpg'; // Replace with your actual profile image path

const About = () => {
  return (
    <div className="w-full py-20 bg-gray-900 text-white" id="about">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <h2 className="text-4xl text-center font-oswald mb-12">About Me</h2>

        {/* Box Container */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between space-x-6">
          {/* Left Side: Square Profile Image */}
          <div className="w-80 h-80 md:w-1080 md:h-1080 rounded-lg overflow-hidden mb-6 md:mb-0">
            <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
          </div>

          {/* Right Side: Description */}
          <div className="md:flex-1 text-lg text-gray-300">
            <p>
            Hello! I'm Koushik K V, a recent MCA graduate with a passion for full-stack development, cloud computing, and AI-driven solutions. I specialize in building scalable web applications using MERN Stack (MongoDB, Express.js, React.js, Node.js) and leveraging Azure cloud services for efficient deployment.

With expertise in Python, JavaScript, and AI technologies, I enjoy solving complex problems, optimizing performance, and creating user-friendly, responsive interfaces. Always eager to learn and adapt, I stay up-to-date with emerging tools and frameworks to deliver innovative, high-impact applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
