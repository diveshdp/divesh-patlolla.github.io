import React from "react";
import img from "../../assets/profile.jpeg";
import Button from "@mui/material/Button";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { ReactTyped } from "react-typed";
import "./Hero.css";

const Hero: React.FC = () => {
    return (
        <section id="hero">
            <div className="hero-wrapper" data-aos="zoom-in" data-aos-delay="500">
                <h1 className="hero-name">Divesh Patlolla</h1>

                {/* CHANGED: removed "Cricketer" and "Gamer", updated to professional strings */}
                <p className="typed-line">
                    I'm a{" "}
                    <span className="typed-text">
                        <ReactTyped
                            strings={[
                                "Senior Full-Stack Engineer",
                                "UI Development Lead",
                                "React Specialist",
                                "Fintech Builder",
                                 "Cricketer",
                                 "Gamer"
                            ]}
                            typeSpeed={80}
                            loop
                            fadeOut
                            fadeOutDelay={200}
                            showCursor
                            cursorChar="|"
                        />
                    </span>
                </p>

                <Button
                    variant="outlined"
                    target="_blank"
                    startIcon={<CloudDownloadIcon />}
                    sx={{
                        color: "rgb(116, 128, 138)",
                        borderColor: "rgb(116, 128, 138)",
                        marginTop: "20px",
                    }}
                    href="https://docs.google.com/document/d/1SA8wIdsvQ9VcEUsqH2C0ZFdnHv6JPHas/edit?usp=sharing&ouid=107314884457077143980&rtpof=true&sd=true"
                >
                    Download Resume
                </Button>
                <div className="about-container">
                    {/* LEFT */}
                    <div className="about-image">
                        <img src={img} alt="Profile" />
                    </div>

                    {/* RIGHT */}
                    <div className="about-content">
                        {/* CHANGED: "Senior Full Stack Developer" → more specific title */}
                        <h3 className="hero-name">Senior Full-Stack Engineer · UI Development Lead</h3>

                        {/* CHANGED: updated bio — removed encoding artifacts, added Golang/Python, both AWS certs, Salesforce cert */}
                        <p className="subtext">
                            Senior Full-Stack Engineer with 6+ years building enterprise-grade
                            distributed applications on SOA and EDA architectures across financial
                            services. Currently UI Development Lead at Vanguard — primarily driving
                            React + TypeScript frontend architecture for 150K+ active investors
                            while actively building Golang &amp; Java backend microservices
                            processing 2M+ financial transactions/day at sub-150ms latency.
                            Deep expertise in React, TypeScript, Golang, Java, Python, Node.js,
                            and AWS. AWS Developer Associate &amp; Solutions Architect Associate
                            certified · 2026. Salesforce Certified Administrator · 2022.
                        </p>

                        {/* CHANGED: removed the "Always seeking..." line entirely */}

                        <div className="about-info">
                            <div>
                                <ul>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>
                                        <strong>Phone:</strong>
                                        <span>+1 (856) 398-5330</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>
                                        <strong>City:</strong>
                                        <span>Paoli, Philadelphia, PA 🔄 Jersey City, NJ</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>
                                        <strong>Degree:</strong>
                                        {/* CHANGED: "Information Systems" → "Information Studies" */}
                                        <span>M.S. Information Systems @ Trine University</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>
                                        <strong>Email:</strong>
                                        <span>
                                            <a href="mailto:diveshree77@gmail.com">
                                                diveshree77@gmail.com
                                            </a>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="social-links">
                            {/* CHANGED: removed Instagram (not professional) */}
                            <a href="https://github.com/diveshdp" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://www.linkedin.com/in/divesh-patlolla/" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                            <a href="https://divesh-patlolla-github-io.vercel.app/" target="_blank" rel="noopener noreferrer">
                                Portfolio
                            </a>
                            <a href="mailto:diveshree77@gmail.com">Email</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
