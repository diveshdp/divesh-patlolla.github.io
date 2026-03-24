import React, { type JSX } from "react";
import WorkIcon from "@mui/icons-material/Work";
import { VerticalTimeline, VerticalTimelineElement } from "../timelineComponent/Timeline";
import "./Experience.css";

interface TimelineItem {
  date: string;
  cardTitle: string;
  cardSubtitle: string;
  cardDetailedText: string | JSX.Element[];
}

const Experience: React.FC = () => {
  const items: TimelineItem[] = [
    // CHANGED: date was "July 2023", updated to "June 2023"; subtitle updated to reflect UI Lead + full-stack
    {
      date: "June 2023 - Present",
      cardTitle: "Vanguard",
      cardSubtitle: "Senior Software Engineer · UI Development Standby Lead",
      cardDetailedText: [
        "Serve as UI Development Lead — primary owner of React + TypeScript frontend architecture for 150K+ active investors, while actively building Golang & Java (Spring Boot) microservices processing 2M+ financial transactions/day at sub-150ms p99 latency.",
        "Architected end-to-end authentication across parent portal and child apps using Okta SSO and SailPoint RBAC — dynamically controlling UI components, buttons, and workflows based on user roles and entitlements.",
        "Led full-stack platform modernization from JSP/jQuery to React + microservices; reduced page load times 40% via code splitting, lazy loading, and AG Grid virtualization for 100K+ row financial datasets.",
        "Designed RESTful & GraphQL APIs; tuned Oracle DB and PostgreSQL with stored procedures and Redis caching — reduced DB load 40%+ on high-volume compliance pipelines.",
        "Maintained 85%+ test coverage with Playwright E2E, Jest, and React Testing Library; mentored engineers across 4 agile teams.",
        "AI-accelerated delivery — daily use of GitHub Copilot, Cursor AI, and Claude achieving 2–5x productivity gains.",
      ].map((text, idx) => <li key={idx}>{text}</li>),
    },
    // CHANGED: added intern role at Vanguard
    {
      date: "Jan 2023 - June 2023",
      cardTitle: "Vanguard",
      cardSubtitle: "Junior Software Engineer ",
      cardDetailedText: [
        "Implemented E2E tests with Playwright, improving test coverage by 20% and reducing manual testing time by 30%.",
        "Built reusable React + TypeScript UI components and wrote Jest unit tests within an Agile/Scrum environment.",
        "Supported Java (Spring Boot) and Node.js backend teams in building and testing RESTful APIs, collaborating with senior engineers and product managers.",
      ].map((text, idx) => <li key={idx}>{text}</li>),
    },
    // CHANGED: removed "Virtual Agro-Commerce" and "Kalaa" freelance roles — not relevant for senior fintech/FAANG roles
    // CHANGED: HCL date corrected to May 2019; subtitle updated from "UI Developer" to "Software Engineer"
    {
      date: "May 2019 - Dec 2021",
      cardTitle: "HCL Technologies",
      cardSubtitle: "Software Engineer",
      cardDetailedText: [
        "Built enterprise Java (Spring Boot) backend systems and RESTful APIs for a $5B+ financial services client — service layers, DAO patterns, and batch processing pipelines.",
        "Developed Angular/TypeScript + Node.js web applications with OAuth2, SAML, and Azure AD authentication meeting strict financial compliance standards.",
        "Drove CI/CD automation (Jenkins, uDeploy, SonarQube, Fortify) — improved delivery velocity 25% and cut production bugs 30%.",
      ].map((text, idx) => <li key={idx}>{text}</li>),
    },
    {
      date: "Jan 2023 - Sep 2023",
      cardTitle: "Virtual Agro-Commerce Ecosystem",
      cardSubtitle: "Freelance UI/Full-Stack Developer",
      cardDetailedText: [
        "Built e-commerce platform for farmers with React + TypeScript and Python backend",
        "Deployed on AWS (S3, Lambda, DynamoDB, CloudFront) with CI/CD pipelines",
        "Handled 5000+ active users and delivered MVP in 12 weeks",
      ].map((text, idx) => <li key={idx}>{text}</li>),
    },
  ];

  return (
    <section id="experience" className="about background-alt">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>EXPERIENCE</h2>
        </div>
        <VerticalTimeline layout="2-columns" animate={true} lineColor="#0563bb">
          {items.map((data, i) => (
            <VerticalTimelineElement
              key={i}
              date={data.date}
              icon={<WorkIcon />}
              iconStyle={{ background: "#0563bb", color: "#fff" }}
              position={i % 2 === 0 ? "left" : "right"}
              visible={true}
            >
              <h3>{data.cardTitle}</h3>
              <h4>{data.cardSubtitle}</h4>
              <ul>
                {Array.isArray(data.cardDetailedText)
                  ? data.cardDetailedText
                  : <li>{data.cardDetailedText}</li>}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
