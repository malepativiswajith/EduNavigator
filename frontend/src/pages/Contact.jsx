import React from "react";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">About Us</h1>

      <div className="contact-section">
        <h2>GET IN TOUCH</h2>
        <p>
          Have questions about colleges, exams, or your academic journey?
          We're here to help! Reach out to us anytime.
        </p>
      </div>

      <div className="contact-section">
        <h2>EMAIL</h2>
        <p>📩 support@edunavigator.com</p>
      </div>

      <div className="contact-section">
        <h2>PHONE</h2>
        <p>📞 +91 98765 43210</p>
      </div>

      <div className="contact-section">
        <h2>Our Mission</h2>
        <p>
          provide relaiable ,up-to-date info for students.<br />
          Simplify college selection and support exam prepeparation.<br />
          Guide students towards oppurtunities that match their goals.
        </p>
      </div>
    </div>
  );
}
