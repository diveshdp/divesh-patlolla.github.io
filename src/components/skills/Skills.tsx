import React from "react";
import "./Skills.css";

const Skills: React.FC = () => {
  const skills: string[] = [
    "JavaScript",
    "Python",
    "React",
    "Angular",
    "Flask",
    "TypeScript",
    "Java",
    "SpringBoot",
    "Golang",
    "GraphQL",
    "Hibernate",
    "Machine Learning",
    "MySQL",
    "Oracle DB",
    "MongoDB",
    "Docker",
    "AWS",
    "Azure",
    "CI/CD",
    "Agile Methodologies",
    "JIRA",
    "Git",
    "RESTful APIs",
    "Microservices",
    "Jest",
    "React Testing Library",
    "Vitest",
    "Playwright",
    "Material UI",
    "Bootstrap",
    "Tailwind CSS",
    "Redux",
    "Zustand",
    "React Query",
    "Module Federation",
    "Micro Frontends",
    "Webpack"
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
