import React from "react";
import { motion } from "framer-motion";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* HEADER */}
      <motion.section
        className="contact-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1>Get in Touch</h1>
        <p>
          Have a question, collaboration idea, or just want to say hello? I’d
          love to hear from you! Fill out the form below and I’ll get back to
          you as soon as possible.
        </p>
      </motion.section>

      {/* CONTACT FORM */}
      <motion.section
        className="contact-form-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <form className="contact-form">
          <motion.div
            className="form-group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <input type="text" name="name" required />
            <label htmlFor="name">Your Name</label>
          </motion.div>

          <motion.div
            className="form-group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <input type="email" name="email" required />
            <label htmlFor="email">Email Address</label>
          </motion.div>

          <motion.div
            className="form-group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <textarea name="message" rows="5" required></textarea>
            <label htmlFor="message">Message</label>
          </motion.div>

          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(42, 42, 114, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.section>

      {/* FOOTER */}
      <motion.footer
        className="contact-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <p>&copy; 2025 Andrea. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </motion.footer>
    </div>
  );
};

export default Contact;
