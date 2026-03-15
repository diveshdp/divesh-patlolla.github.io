import React from "react";

// CHANGED: footer had someone else's social links (bhushan-borole)! Fixed to Divesh's links.
const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="social-links">
          <a
            href="https://github.com/diveshdp"
            className="github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/divesh-patlolla-5056bb259/"
            className="linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://divesh-patlolla-github-io.vercel.app/"
            className="portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bx-globe"></i>
          </a>
          <a href="mailto:diveshree77@gmail.com">
            <i className="bx bx-envelope"></i>
          </a>
        </div>
        <div className="credits" style={{ color: "#74808a" }}>
          Made with <span style={{ color: "#e25555" }}>&hearts;</span> using React
        </div>
      </div>
    </footer>
  );
};

export default Footer;
