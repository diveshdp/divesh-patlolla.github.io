import React, { type JSX } from "react";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";

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
      cardSubtitle: "Software Engineer",
      cardDetailedText: [
        "Developing automated systems that detect security issues and manage workflows across Azure Identity services on a global scale.",
        "Implement privacy-enhancing technologies to ensure compliance with applicable privacy laws and regulations.",
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
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.map((data, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "#343a40" }}
                  date={data.date}
                  dateClassName="timeline-date"
                  contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
                  iconStyle={{ background: "#0563bb", color: "#fff" }}
                  icon={<WorkIcon />}
                >
                  <h3
                    className="vertical-timeline-element-title"
                    style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.8)" }}
                  >
                    {data.cardTitle}
                  </h3>
                  <h4
                    className="vertical-timeline-element-subtitle"
                    style={{ fontSize: "1.2em", fontWeight: 350, color: "#7e8890" }}
                  >
                    {data.cardSubtitle}
                  </h4>
                  <ul
                    style={{ fontSize: "1em", fontWeight: 350, color: "#74808a" }}
                  >
                    {Array.isArray(data.cardDetailedText)
                      ? data.cardDetailedText
                      : <li>{data.cardDetailedText}</li>}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
