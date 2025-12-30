import React from "react";
import img from "../assets/profile.jpeg";
import Typed from "typed.js";
import Button from "@mui/material/Button";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const Hero: React.FC = () => {
    return (
        <section id="hero" className="d-flex flex-column justify-content-center">
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 15px" }} data-aos="zoom-in" data-aos-delay="500">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px", alignItems: "center" }}>
                    <div className="item-center">
                        <h1>Divesh Patlolla</h1>
                        <br />
                        <p>
                            I'm&nbsp;
                            <span className="typed" data-typed-items='["Developer", "Tabla Player", "Gamer"]'></span>
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
                            href="https://drive.google.com/file/d/1XVfSZNcC6P9QlmEgA3s1Ebi23kydQGYj/view?usp=sharing"
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
