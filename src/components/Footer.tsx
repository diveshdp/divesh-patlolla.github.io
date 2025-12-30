import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="social-links">
          <a
            href="https://twitter.com/bhushanborole26"
            className="twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/bhushan_borole_/"
            className="instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://github.com/bhushan-borole"
            className="google-plus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/bhushan-borole/"
            className="linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="mailto:diveshree77@gmail.com">
            <i className="bx bx-envelope"></i>
          </a>
        </div>
        <div className="credits" style={{ color: "#74808a" }}>
          Made with <span style={{ color: "#e25555" }}>&hearts;</span> using
          React
        </div>
      </div>
    </footer>
  );
};

export default Footer;
