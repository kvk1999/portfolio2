import React from "react";
import profilePic from "../assets/profile-pic.jpg"; // Replace with your actual profile image path
import { FaArrowDown } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const Home = () => {
  const scrollToSection = () => {
    const nextSection = document.getElementById("about"); // Replace with your section ID
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-900 text-white" id="home">
      {/* Profile Picture */}
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-6">
        <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
      </div>

      {/* Name */}
      <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
       Hello 👋 I'm K V Koushik
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold font-ubuntu text-gray-300 mb-4">
        I'm
      </h2>

      {/* Typing Effect */}
      <div className="text-xl md:text-2xl font-semibold font-ubuntu text-gray-300 mb-8">
        <Typewriter
          options={{
            strings: [
              "Full Stack Developer",
              "MERN Developer",
              "Web Developer",
              "Frontend Developer",
              "Backend Developer",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </div>

      {/* Down Arrow Button */}
      <button
        onClick={scrollToSection}
        className="mt-6 animate-bounce text-white focus:outline-none"
        aria-label="Scroll Down"
      >
        <FaArrowDown size={30} />
      </button>
    </div>
  );
};

export default Home;
