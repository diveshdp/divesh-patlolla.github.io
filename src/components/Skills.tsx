import React from "react";

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
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Skills</h2>
        </div>
        <div>
          <ul>
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
