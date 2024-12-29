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
              Hello! I'm K V Koushik, a recent MCA graduate with practical experience in full-stack development. I completed a 3-month internship at MagicBus, Chennai, where I contributed to an exciting project called <span className="font-semibold">'Pathology Classification'</span>.
              <br />During this internship, I sharpened my skills in HTML, CSS, JavaScript, and expanded my knowledge by learning Bootstrap and React.<br />
              Additionally, I developed a project titled 'Virtual Desktop Assistant' during my academic journey, demonstrating my ability to create efficient and functional solutions.
              <br />As a passionate Full Stack Developer, I'm eager to leverage my skills to tackle real-world challenges.<br />
              Let’s connect and explore the endless potential of coding together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
