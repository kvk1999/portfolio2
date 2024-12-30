import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="p-8 bg-gray-900">
      <hr />
      {/* Main Header */}
      <h2 className="text-5xl text-white font-extrabold font-oswald text-center mt-20">Get in Touch</h2>

      {/* Developer Title */}
      <div className="text-center mt-5">
        <p className="text-4xl font-oswald text-white">Need a Developer</p>
      </div>

      {/* Contact Info */}
      <div className="text-center mt-10 space-y-4">
        {/* Email Link */}
        <a 
          href="mailto:koushikraghavan@gmail.com" 
          className="text-lg text-blue-600 hover:text-blue-800 transition duration-300"
        >
          <p className="text-2xl font-bold">koushikraghavan@gmail.com</p>
          <p className="text-lg">Click to send me an email</p>
        </a>
        
        {/* "Let's grab a coffee" Text */}
        <p className="text-xl text-white mt-5">Let's grab a coffee ☕</p>
      </div>

      {/* Social Links */}
      <div className="text-center mt-10">
        <p className="text-2xl font-semibold text-white mb-4">Social Links</p>
        <div className="space-x-4">
          <a 
            href="https://www.linkedin.com/in/koushik-raghavan-kunnavakkam-vinchimur-011a0113a/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg text-blue-500 hover:text-blue-700 transition duration-300"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/kvk1999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg text-white hover:text-black transition duration-300"
          >
            GitHub
          </a>
        </div>
      </div>

      <hr />

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-10">
        <p>&copy; 2024 Koushik K V. All rights reserved.</p>
      </footer>
    </section>
  );
}
