import React from "react";
import img from "../assets/profile.jpeg";
import Button from "@mui/material/Button";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { ReactTyped } from "react-typed";

const Hero: React.FC = () => {
    return (
        <section id="hero" className="d-flex flex-column justify-content-center">
            <div style={{ margin: "0 auto", padding: "0 15px" }} data-aos="zoom-in" data-aos-delay="500">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px", alignItems: "center" }}>
                    <div className="item-center">
                        <h1
                            style={{
                                color: "#ffffff",
                                fontSize: "48px",
                                fontWeight: 700,
                                marginBottom: "10px",
                            }}
                        >
                            Divesh Patlolla
                        </h1>
                        <br />
                        <p
                            style={{
                                fontSize: "22px",
                                color: "#9ca3af",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                paddingLeft: "200px"
                            }}
                        >
                            <span>I'm a</span>

                            <span
                                style={{
                                    color: "#1e90ff",
                                    fontWeight: 600,
                                    fontSize: "26px",
                                    lineHeight: 1.2,
                                    minWidth: "140px",     // 👈 KEY FIX
                                    display: "inline-block",
                                }}
                            >
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


                        <div className="social-links">
                            <a href="https://www.instagram.com/reddy_patlolla_/">
                                <i className="bx bxl-instagram"></i>
                            </a>
                            <a href="https://github.com/diveshdp">
                                <i className="bx bxl-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/divesh-patlolla-5056bb259/">
                                <i className="bx bxl-linkedin"></i>
                            </a>
                            <a href="mailto:diveshree77@gmail.com">
                                <i className="bx bx-envelope"></i>
                            </a>
                        </div>

                        <br />

                        <Button
                            variant="outlined"
                            target="_blank"
                            href=""
                            // href="https://drive.google.com/file/d/1XVfSZNcC6P9QlmEgA3s1Ebi23kydQGYj/view?usp=sharing"
                            startIcon={<CloudDownloadIcon />}
                            sx={{
                                color: "rgb(116, 128, 138)",
                                borderColor: "rgb(116, 128, 138)",
                            }}
                        >
                            Download Resume
                        </Button>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "15px",
                        }}
                    >
                        <img
                            src={img}
                            alt="profile"
                            style={{
                                height: "100%",
                                width: "65%",
                                borderRadius: "30px",
                                objectFit: "cover",
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
