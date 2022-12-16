import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contacts";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
// import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <main className="text-gray-400 bg-greyBlue body font ">
      <Navbar/>
      <About/>
      <Projects/>
      <Skills/>
      {/* <Testimonials/> */}
      <Contact/>
    </main>
  );
}

export default App;
