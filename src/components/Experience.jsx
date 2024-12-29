import React from 'react';
import { FaSchool, FaCloud } from 'react-icons/fa';

const TimelineItem = ({ side, icon, title, role, date }) => {
  return (
    <div className={`flex ${side === 'left' ? 'flex-row' : 'flex-row-reverse'} items-center w-full mb-8`}>
      {/* Timeline Line */}
      <div className="w-1 h-full bg-gray-500 hidden md:block"></div>

      {/* Content */}
      <div className="relative flex items-center w-full md:w-1/2">
        {/* Box with Icon */}
        <div className={`bg-gray-800 p-4 rounded-lg shadow-md w-full ${side === 'left' ? 'ml-8' : 'mr-8'}`}>
          {/* Icon Inside the Box */}
          <div className="flex justify-start items-center space-x-4 mb-4">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex justify-center items-center text-white">
              {icon}
            </div>
            <h4 className="text-lg font-semibold">{title}</h4>
          </div>
          <p className="text-gray-300 italic mt-1">{role}</p>
          <p className="text-gray-400 mt-2 text-sm">{date}</p>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const timelineItems = [
    { id: 'guvi', side: 'left', icon: <FaSchool size={16} />, title: 'GUVI', role: 'Full-Stack MERN Development', date: 'Aug 2024 - Nov 2024' },
    { id: 'magicbus', side: 'right', icon: <FaCloud size={16} />, title: 'Magicbus India Foundation', role: 'Cloud Computing', date: 'Feb 2024 - May 2024' },
    { id: 'inlustro', side: 'left', icon: <FaSchool size={16} />, title: 'Inlustro', role: 'Full-Stack Development', date: 'Feb 2023 - May 2023' },
    { id: 'vels', side: 'right', icon: <FaSchool size={16} />, title: 'Vels Institute of Science and Technology', role: 'Master of Computer Applications (MCA)', date: '2022 - 2024' },
    { id: 'dhanraj', side: 'left', icon: <FaSchool size={16} />, title: 'Dhanraj Baid Jain College', role: 'Bachelor of Science (Computer Science)', date: '2019 - 2022' },
    { id: 'emma', side: 'right', icon: <FaSchool size={16} />, title: 'Emma Foulger Matriculation Higher Secondary School', role: '11th & 12th Grade', date: '2017 - 2019' },
    { id: 'hindu', side: 'left', icon: <FaSchool size={16} />, title: 'The Hindu Higher Secondary School', role: '10th Grade', date: '2015 - 2016' },
  ];

  return (
    <div className="w-full py-16 bg-gray-900 text-white" id="experience">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl text-center font-oswald mb-12">Experience & Education</h2>

        {/* Timeline */}
        <div className="relative flex flex-col items-center">
          {/* Vertical Line for the Timeline */}
          <div className="absolute left-1/2 w-1 h-full bg-gray-500 hidden md:block"></div>

          {/* Timeline Items */}
          {timelineItems.map((item) => (
            <TimelineItem
              key={item.id}
              side={item.side}
              icon={item.icon}
              title={item.title}
              role={item.role}
              date={item.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
