import React from "react";
import Skills from "./skills/Skills";
import Experience from "./experience/Experience";
// import Projects from "./Projects";
import Education from "./education/Education";
// import Achievements from "./Achievements";
import Footer from "./Footer";
import Contact from "./contact/Contact";

const Main: React.FC = () => (
  <main id="main" style={{ width: "100%" }}>
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
