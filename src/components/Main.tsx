import React from "react";
import About from "./about";
import Skills from "./Skills";
import Experience from "./Experience";
// import Projects from "./Projects";
// import Education from "./Education";
// import Achievements from "./Achievements";
import Footer from "./Footer";
import Contact from "./Contact";

const Main: React.FC = () => (
  <main id="main">
    <About />
    <Experience />
    {/* <Projects /> */}
    <Skills />
    {/* <Achievements /> */}
    {/* <Education /> */}
    <Contact />
    <hr />
    <Footer />
  </main>
);

export default Main;
