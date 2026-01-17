import React, { type JSX } from "react";
import WorkIcon from "@mui/icons-material/Work";
import { VerticalTimeline, VerticalTimelineElement } from "./Timeline";
import "./Experience.css";
interface TimelineItem {
  date: string;
  cardTitle: string;
  cardSubtitle: string;
  cardDetailedText: string | JSX.Element[];
}

const Experience: React.FC = () => {
  const items: TimelineItem[] = [
    {
      date: "January 2024 - Present",
      cardTitle: "Vanguard",
      cardSubtitle: "Senior Frontend Engineer (React, Micro Frontends & Go lang)",
      cardDetailedText: [
        "Built dynamic web apps using React, React Query, Zustand, and MUI/AG Grid for enterprise systems",
        "Implemented modular micro-frontend architectures with Module Federation across multiple teams",
        "Optimized performance & quality with lazy loading, reusable components, Vitest & React Testing Library",
      ].map((text, idx) => <li key={idx}>{text}</li>),
    },
    {
      date: "Jan 2023 - Aug 2023",
      cardTitle: "Virtual Agro-Commerce Ecosystem",
      cardSubtitle: "Freelance Full-Stack Developer",
      cardDetailedText: [
        "Built e-commerce platform for farmers with React + TypeScript and Python backend",
        "Deployed on AWS (S3, Lambda, DynamoDB, CloudFront) with CI/CD pipelines",
        "Handled 5000+ active users and delivered MVP in 12 weeks",
      ].map((text, idx) => <li key={idx}>{text}</li>),
    },
    {
      date: "Sep 2022 - Jan 2023",
      cardTitle: "Kalaa",
      cardSubtitle: "Freelance UI Developer",
      cardDetailedText: [
        "Developed digital art marketplace using React, Material UI, and Redux",
        "Integrated AWS-hosted APIs for payments and authentication",
        "Improved user engagement by 20% through optimized UI and responsive design",
      ].map((text, idx) => <li key={idx}>{text}</li>),
    },
    {
      date: "Jun 2020 - Dec 2021",
      cardTitle: "HCL Technologies",
      cardSubtitle: "UI Developer",
      cardDetailedText: [
        "Built responsive Angular applications integrated with REST APIs for finance client",
        "Reduced page load time by 35% with lazy loading and code-splitting",
        "Migrated legacy tables to Material UI, optimized Redux state management",
        "Collaborated with QA, backend, and UX teams in Agile environment",
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
