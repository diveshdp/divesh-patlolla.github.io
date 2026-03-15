import React from "react";
import "./Certifications.css";

// NEW COMPONENT — add to Main.tsx
const certifications = [
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    date: "2026",
    credentialId: "",
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2026",
    credentialId: "",
  },
  {
    name: "Salesforce Certified Administrator",
    issuer: "Salesforce · Trailhead",
    date: "December 2022",
    credentialId: "2783517",
  },
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="skills section-bg">
      <div data-aos="fade-up">
        <div className="section-title">
          <h2>CERTIFICATIONS</h2>
        </div>
        <div className="certs-grid">
          {certifications.map((cert, i) => (
            <div className="cert-card" key={i}>
              <div className="cert-name">{cert.name}</div>
              <div className="cert-issuer">{cert.issuer}</div>
              <div className="cert-date">{cert.date}</div>
              {cert.credentialId && (
                <div className="cert-id">ID: {cert.credentialId}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
