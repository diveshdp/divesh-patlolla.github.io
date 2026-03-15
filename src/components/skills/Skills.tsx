import React from "react";
import "./Skills.css";

// CHANGED: added Golang, Python up front; removed Vue.js; added Okta SSO, SailPoint RBAC, GraphQL, AG Grid
const primaryStack = [
  "React",
  "TypeScript",
  "JavaScript",
  "Golang",
  "Python",
  "Redux",
  "Zustand",
  "React Query",
  "Tailwind CSS",
  "AG Grid",
  "RESTful APIs",
  "GraphQL",
  "Micro Frontends",
  "Module Federation",
  "Jest",
  "Playwright",
  "React Testing Library",
  "Okta SSO",
  "SailPoint RBAC",
  "ES6+",
  "Responsive Design",
  "Single Page Applications (SPA)",
];

// CHANGED: removed duplicate MongoDB; added Kafka, RabbitMQ, Redis, PostgreSQL, Kubernetes, ELK Stack
const backendAndCloud = [
  "Java",
  "Spring Boot",
  "Node.js",
  "Python",
  "Flask",
  "Express.js",
  "Apache Kafka",
  "RabbitMQ",
  "gRPC",
  "PostgreSQL",
  "Oracle DB",
  "MySQL",
  "MongoDB",
  "Redis",
  "Elasticsearch",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "CI/CD",
  "Microservices",
  "ELK Stack",
  "Grafana",
  "Prometheus",
];

// CHANGED: removed duplicate Docker; added GitHub Copilot, Cursor AI, Claude, Figma, Postman
const additionalExperience = [
  "Angular",
  "Hibernate",
  "Terraform",
  "Git",
  "Agile Methodologies",
  "JIRA",
  "Figma",
  "Postman",
  "GitHub Copilot",
  "Cursor AI",
  "Claude (Anthropic)",
  "Bootstrap",
  "Machine Learning",
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
          <h3 className="skills-heading">Backend &amp; Cloud</h3>
          <p className="skills-subtitle">
            Backend systems, APIs, and cloud infrastructure I've built and maintained.
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
            Technologies I've used across enterprise and project-based work.
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
