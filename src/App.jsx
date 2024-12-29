import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'; // Import the new About component
import Experience from './components/Experience'; // Import the new Experience component
import Certifications from './components/Certifications'; // Import the new Certificate component
import Skills from './components/Skills'; // Import the new Skills component
import Projects from './components/Projects'; // Import the new Projects component
import Contact from './components/Contact'; // Import the new Contact component


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About /> {/* Add the About component here */}
      <Experience /> {/* Add the Experience component here */}
      <Certifications /> {/* Add the Certificate component here */}
      <Skills /> {/* Add the Skills component here */}
      <Projects /> {/* Add the Projects component here */}
      <Contact /> {/* Add the Contact component here */}
    </div>
  );
}
export default App; // Export the App component