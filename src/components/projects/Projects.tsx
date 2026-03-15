import React from "react";
import "./Projects.css";

// CHANGED: was completely empty — built out fully
const projects = [
  {
    name: "Personal Website",
    description:
      "Personal portfolio built with React + TypeScript, deployed on Vercel. Showcases projects, experience, and skills.",
    link: "https://divesh-patlolla-github-io.vercel.app/",
    linkLabel: "divesh-patlolla-github-io.vercel.app",
    tags: ["React", "TypeScript", "Vercel"],
  },
  {
    name: "Investment Dashboard App",
    description:
      "Real-time financial portfolio management platform — 500+ concurrent users at sub-200ms latency using WebSockets and Redis pub/sub.",
    link: "https://profolio-management.vercel.app/",
    linkLabel: "profolio-management.vercel.app",
    tags: ["React", "Golang", "WebSockets", "Redis", "AWS"],
  },
  {
    name: "DE-Commerce Platform",
    description:
      "6-service event-driven e-commerce architecture processing 5K+ daily orders at 99.8% accuracy. Production-grade EDA with RabbitMQ.",
    link: "",
    linkLabel: "",
    tags: ["Java", "Spring Boot", "RabbitMQ", "EDA", "MySQL"],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="about background-alt">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>PROJECTS</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div className="project-card" key={i}>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.description}</p>
              {project.link && (
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ↗ {project.linkLabel}
                </a>
              )}
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
