import React from "react";
import "./Skills.css";

const Skills: React.FC = () => {
  const skills: string[] = [
    "JavaScript",
    "Python",
    "Flask",
    "React",
    "Java",
    "SpringBoot",
    "JPA",
    "Hibernate",
    "Machine Learning",
    "MySQL",
    "Oracle DB",
  ];

  return (
    <section id="skills" className="skills section-bg">
      <div data-aos="fade-up">
        <div className="section-title">
          <h2>SKILLS</h2>
        </div>

        <div className="skills-container">
          {skills.map((skill, i) => (
            <div key={i} className="skill-badge">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
