import React from "react";
import "./Skills.css";

const primaryStack = [
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Zustand",
  "React Query",
  "Material UI",
  "Tailwind CSS",
  "RESTful APIs",
  "Micro Frontends",
  "Module Federation",
  "Jest",
  "React Testing Library",
  "Vitest",
  "Playwright",
  "Vue.js",
  "ES6+",
  "Webpack",
  "Responsive Design",
  "Single Page Applications (SPA)",
];

const backendAndCloud = [
  "Golang",
  "Java",
  "SpringBoot",
  "Python",
  "Node.js",
  " Express.js",
  "Flask",
  "MongoDB",
  "MySQL",
  "Oracle DB",
  "Docker",
  "AWS",
  "Azure",
  "CI/CD",
  "Microservices",
  "MongoDB",
  "NoSQL Databases",
];

const additionalExperience = [
  "Angular",
  "Hibernate",
  "Machine Learning",
  "GraphQL",
  "Git",
  "Agile Methodologies",
  "JIRA",
  "Bootstrap",
  "Docker",
  "Kubernetes",
  "Terraform",
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills section-bg">
      <div data-aos="fade-up">
        <div className="section-title">
          <h2>SKILLS</h2>
        </div>

        {/* Primary Stack */}
        <div className="skills-group">
          <h3 className="skills-heading">Primary Stack</h3>
          <p className="skills-subtitle">
            Technologies I work with daily and deliver production features in.
          </p>
          <div className="skills-container">
            {primaryStack.map((skill) => (
              <span key={skill} className="skill-badge primary">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Backend & Cloud */}
        <div className="skills-group">
          <h3 className="skills-heading">Backend & Cloud</h3>
          <p className="skills-subtitle">
            Backend systems, APIs, and cloud infrastructure I’ve built and maintained.
          </p>
          <div className="skills-container">
            {backendAndCloud.map((skill) => (
              <span key={skill} className="skill-badge secondary">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Additional Experience */}
        <div className="skills-group">
          <h3 className="skills-heading">Additional Experience</h3>
          <p className="skills-subtitle">
            Technologies I’ve used across enterprise and project-based work.
          </p>
          <div className="skills-container">
            {additionalExperience.map((skill) => (
              <span key={skill} className="skill-badge tertiary">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
