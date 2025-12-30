import React, { useState } from "react";

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
        body: JSON.stringify({
          email,
          message,
        }),
      });

      setOpen(true);
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      // Proper way to delay re-enabling the button
      setTimeout(() => setDisable(false), 2000);
    }
  };

  return (
    <section id="contact" className="contact section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2 style={{ fontWeight: "bold", color: "rgba(255, 255, 255, 0.8)" }}>
            Get in Touch
          </h2>
        </div>
        <div id="contact-form">
          <form onSubmit={onSubmit}>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit" disabled={disable}>
              Submit
            </button>
          </form>
        </div>
      </div>
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            left: "20px",
            backgroundColor: "#4caf50",
            color: "white",
            padding: "16px",
            borderRadius: "4px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            zIndex: 1000,
          }}
        >
          Your Message is sent!
        </div>
      )}
    </section>
  );
};

export default Contact;
