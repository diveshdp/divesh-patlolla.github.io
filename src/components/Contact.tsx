import React, { useState } from "react";
import "./Contact.css";

const FORMSPARK_URL = "https://submit-form.com/CARCkqSD";

const Contact: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisable(true);

    try {
      await fetch(FORMSPARK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      setOpen(true);
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
    } finally {
      setTimeout(() => setDisable(false), 2000);
    }
  };

  return (
    <section id="contact" className="contact section-bg">
      <div className="contact-container" data-aos="fade-up">
        <div className="contact-title">
          <h2 style={{color: "white"}}>Get in Touch</h2>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={onSubmit}>
            <input
              className="contact-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <textarea
              className="contact-textarea"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button
              className="contact-button"
              type="submit"
              disabled={disable}
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {open && (
        <div className="contact-toast">
          Your Message is sent!
        </div>
      )}
    </section>
  );
};

export default Contact;
