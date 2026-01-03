import React from "react";
import img from "../assets/profile.jpeg";
import "./About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about background-alt">
      <div style={{ margin: "0 auto", padding: "0 15px" }} data-aos="fade-up">
        <div className="section-title">
          <h2>ABOUT</h2>
        </div>

        <div className="about-container">
          <div className="about-image">
            <img src={img} alt="Profile" />
          </div>

          <div className="about-content">
            <h3>Software Developer.</h3>

            <p>
              A passionate Full Stack Developer, Competitive Programmer, ML
              enthusiast and Tabla player.
            </p>

            <p>
              Always seeking challenging position in an organization where my
              skills find ample opportunities for upgradation and growth of
              the company.
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
                    <span>Masters - Information Systems @ Trine University (2022-2023)</span>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
