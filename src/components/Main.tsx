import React from "react";
import About from "./about/About";
import Skills from "./skills/Skills";
import Experience from "./Experience";
// import Projects from "./Projects";
import Education from "./education/Education";
// import Achievements from "./Achievements";
import Footer from "./Footer";
import Contact from "./contact/Contact";

const Main: React.FC = () => (
  <main id="main">
    <About />
    <Experience />
    {/* <Projects /> */}
    <Education />
    <Skills />
    {/* <Achievements /> */}
    <Contact />
    <hr />
    <Footer />
  </main>
);

export default Main;
