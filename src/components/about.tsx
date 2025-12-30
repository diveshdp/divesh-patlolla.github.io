import React from "react";
// import img from "../assets/favicon/favicon.ico";

const About: React.FC = () => {
  return (
    <section id="about" className="about background-alt">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 15px" }} data-aos="fade-up">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "30px", alignItems: "start" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {/* <img
              src={img}
              alt="Profile"
              style={{ borderRadius: "50%", width: "50%", height: "auto" }}
            /> */}
          </div>

          <div className="content" style={{ paddingTop: "16px" }}>
            <br />
            <h3>Software Developer.</h3>
            <br />
            <p style={{ color: "#728394" }}>
              A passionate Full Stack Developer, Competitive Programmer, ML
              enthusiast and Tabla player.
            </p>
            <br />
            <p style={{ color: "#728394" }}>
              Always seeking challenging position in an organization where my
              skills find ample opportunities for upgradation and growth of
              the company.
            </p>
            <br />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.75fr", gap: "30px" }}>
              <div>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Phone:</strong>{" "}
                    <span>+1 8563985330</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>City:</strong>{" "}
                    <span>Paoli, Philadelphia</span>
                  </li>
                </ul>
              </div>

              <div>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Degree:</strong>{" "}
                    <span>Masters - Information Systems @ Trine University (2022-2023)</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Email:</strong>{" "}
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
