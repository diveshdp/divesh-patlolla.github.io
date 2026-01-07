import React, { useState } from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisable(true);

    const formData = new FormData();
    formData.append("access_key", "55af89a8-4fc8-4128-8985-d79d204ec10a"); 
    formData.append("email", email);
    formData.append("message", message);
    formData.append("subject", `Contact Form: ${email}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setOpen(true);
        setEmail("");
        setMessage("");
        setTimeout(() => setOpen(false), 5000);
      } else {
        alert("Failed to send. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Error occurred. Please try again.");
    } finally {
      setDisable(false);
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
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={disable}
            />

            <textarea
              className="contact-textarea"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              disabled={disable}
              rows={6}
            />

            <button
              className="contact-button"
              type="submit"
              disabled={disable}
            >
              {disable ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      {open && (
        <div className="contact-toast">
          ✓ Your message has been sent successfully!
        </div>
      )}
    </section>
  );
};

export default Contact;