import React from "react";

const Certifications = () => {
  const certificates = [
    {
      title: "Full Stack Developer & Internship Certificate",
      issuedBy: "Inlustro",
      field: "Web Development",
    },
    {
      title: "Machine Learning A-Z: AI, Python & R + ChatGPT Prize [2024]",
      issuedBy: "Udemy",
      field: "Machine Learning",
    },
    {
      title: "Participation Completion in the final stage of the Olympiad in Physics",
      issuedBy: "Precise Energy",
      field: "Physics",
    },
    {
      title: "MongoDB",
      issuedBy: "GUVI",
      field: "Database Management",
    },
    {
      title: "MySQL",
      issuedBy: "GUVI",
      field: "Database Management",
    },
    {
      title: "Full stack Development by GUVI (Certification by IIT Madras)",
      issuedBy: "GUVI",
      field: "Full Stack Development",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen px-4 py-8 text-white" id="certifications">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl text-center font-oswald mb-12">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-amber-500"
            >
              <h3 className="text-xl font-semibold text-gray-800">{certificate.title}</h3>
              <p className="text-sm text-gray-600 mt-2">Issued By: {certificate.issuedBy}</p>
              <p className="text-sm text-gray-600">Field: {certificate.field}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
