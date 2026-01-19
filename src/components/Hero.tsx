import React from "react";
import img from "../assets/profile.jpeg";
import Button from "@mui/material/Button";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { ReactTyped } from "react-typed";
import "./Hero.css";

const Hero: React.FC = () => {
    return (
        <section id="hero">
            <div className="hero-wrapper" data-aos="zoom-in" data-aos-delay="500">
                <h1 className="hero-name">Divesh Patlolla</h1>

                <p className="typed-line">
                    I'm a{" "}
                    <span className="typed-text">
                        <ReactTyped
                            strings={["Developer", "Cricketer", "Gamer"]}
                            typeSpeed={90}
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
                    href="https://drive.google.com/file/d/1b--_Ay3AIc_UetOR9xtj4oNRZ0YNAFHG/view"
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
                        <h3 className="hero-name">Full Stack Developer</h3>

                        <p className="subtext">
                            A passionate Full Stack Developer, Competitive Programmer, Cricketer.
                        </p>

                        <p className="desc">
                            Always seeking challenging position in an organization where my
                            skills find ample opportunities for upgradation and growth of the
                            company.
                        </p>

                        <div className="about-info">
                            <div>
                                <ul>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>
                                        <strong>Phone:</strong>
                                        <span>+1 8563985330</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>
                                        <strong>City:</strong>
                                        <span>Paoli, Philadelphia</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>
                                        <strong>Degree:</strong>
                                        <span>Masters - Information Systems @ Trine University</span>
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
                            <a href="https://www.instagram.com/reddy_patlolla_/">Instagram</a>
                            <a href="https://github.com/diveshdp">GitHub</a>
                            <a href="https://www.linkedin.com/in/divesh-patlolla-5056bb259/">
                                LinkedIn
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
