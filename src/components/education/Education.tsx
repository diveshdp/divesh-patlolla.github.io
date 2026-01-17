import React, { type JSX } from "react";
import SchoolIcon from "@mui/icons-material/School";
import { VerticalTimeline, VerticalTimelineElement } from "../Timeline";

interface EducationItem {
    date: string;
    institution: string;
    degree: string;
    details: string | JSX.Element[];
}

const Education: React.FC = () => {
    const educationItems: EducationItem[] = [
        {
            date: "2022 - 2023",
            institution: "Trine University",
            degree: "MSc - Information Studies",
            details: [
                "GPA: 4.0/4.0",
                "Finance for Engineers",
                "Object Oriented Programming in Java",
                "Cybersecurity",
                "Statistics & Quantitative Methods",
                "Data Mining and Data Visualization",
                "Project Management",
                "Data Science and Big Data",
            ].map((course, idx) => <li key={idx}>{course}</li>),
        },
        {
            date: "Previous",
            institution: "B V Raju Institute Of Technology",
            degree: "BE in Civil Engineering",
            details: [
                "CGPA: 8.72 (First class with Distinction)",
            ].map((text, idx) => <li key={idx}>{text}</li>),
        },
    ];

    return (
        <section id="education" className="about background-alt">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>EDUCATION</h2>
                </div>
                <VerticalTimeline layout="2-columns" animate={true} lineColor="#0563bb">
                    {educationItems.map((item, i) => (
                        <VerticalTimelineElement
                            key={i}
                            date={item.date}
                            icon={<SchoolIcon />}
                            iconStyle={{ background: "#0563bb", color: "#fff" }}
                            position={i % 2 === 0 ? "left" : "right"}
                            visible={true}
                        >
                            <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                                {item.institution}
                            </h3>
                            <h4 style={{ fontSize: "15px", fontWeight: 500, color: "#74808a", marginBottom: "12px" }}>
                                {item.degree}
                            </h4>
                            <ul style={{ fontSize: "14px", color: "#b0b8bf", margin: 0 }}>
                                {Array.isArray(item.details)
                                    ? item.details
                                    : <li>{item.details}</li>}
                            </ul>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </section>
    );
};

export default Education;

