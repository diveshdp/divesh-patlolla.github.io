import React, { type JSX } from "react";
import WorkIcon from "@mui/icons-material/Work";
import { VerticalTimeline, VerticalTimelineElement } from "./Timeline";

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
      cardSubtitle: "Frontend Engineer (React & Micro Frontends)",
      cardDetailedText: [
        "Built dynamic web apps using React, React Query, Zustand, and MUI/AG Grid for enterprise systems",
        "Implemented modular micro-frontend architectures with Module Federation across multiple teams",
        "Optimized performance & quality with lazy loading, reusable components, Vitest & React Testing Library",
      ].map((text, idx) => <li key={idx}>{text}</li>),
    },
    // {
    //   date: "November 2020 – February 2021",
    //   cardTitle: "Mobisy Technologies",
    //   cardSubtitle: "Research & Development Intern",
    //   cardDetailedText: [
    //     "Collected JSON data by web-scraping, using open API end points and storing it in a RDBMS.",
    //     "Responsible for building SKU Classification system using the collected data.",
    //   ].map((text, idx) => <li key={idx}>{text}</li>),
    // },
    // {
    //   date: "September 2019 – October 2019",
    //   cardTitle: "Techskills IT Consultants",
    //   cardSubtitle: "Backend Developer",
    //   cardDetailedText: [
    //     "Developed applications using Spring Framework for Backend Restful API’s.",
    //     "Wrote SQL/JPQL queries for Data persistence using Spring Data JPA.",
    //   ].map((text, idx) => <li key={idx}>{text}</li>),
    // },
    // {
    //   date: "August 2018 – January 2019",
    //   cardTitle: "TechSkills IT Consultants",
    //   cardSubtitle: "Fullstack Developer Intern",
    //   cardDetailedText:
    //     "Developed a Meeting App website which handles all the data that happens in a meeting. In this project I developed several REST API's using Spring Boot and used the MVC architecture. These API's are being consumed in the frontend.",
    // },
  ];

  return (
    <section id="experience" className="about background-alt">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Experience</h2>
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
