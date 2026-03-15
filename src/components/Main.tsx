import React from "react";
import Skills from "./skills/Skills";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";       // CHANGED: uncommented
import Education from "./education/Education";
import Certifications from "./certifications/Certifications"; // CHANGED: new import
import Footer from "./Footer";
import Contact from "./contact/Contact";

const Main: React.FC = () => (
  <main id="main" style={{ width: "100%" }}>
    <Experience />
    <Projects />           {/* CHANGED: uncommented */}
    <Education />
    <Skills />
    <Certifications />     {/* CHANGED: new section */}
    <Contact />
    <hr />
    <Footer />
  </main>
);

export default Main;
