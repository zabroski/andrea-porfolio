import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setError("");
    setIsSent(false);

    emailjs
      .sendForm(
        "service_hdnia0q", // e.g. service_123abc
        "template_7eva9cq", // e.g. template_contact
        form.current,
        "kYzVSX0Ra4Jpp0Kqi" // e.g. lXyzAbcDEFghIJKl
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          setIsSent(true);
          form.current.reset();
        },
        (error) => {
          console.error("Error:", error.text);
          setError("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="contact-container">
      <motion.section
        className="contact-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Get in Touch</h1>
        <p>
          Have a question or project idea? Leave a message below and I’ll get
          back to you soon!
        </p>
      </motion.section>

      <motion.section
        className="contact-form-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <input type="text" name="user_name" required />
            <label>Your Name</label>
          </div>

          <div className="form-group">
            <input type="email" name="user_email" required />
            <label>Email Address</label>
          </div>

          <div className="form-group">
            <textarea name="message" rows="5" required></textarea>
            <label>Message</label>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>

          {isSent && (
            <p className="success-text">✅ Message sent successfully!</p>
          )}
          {error && <p className="error-text">❌ {error}</p>}
        </form>
      </motion.section>
    </div>
  );
};

export default Contact;
