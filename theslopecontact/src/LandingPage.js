import React from "react";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-wrapper">
      <div className="card">
        <h1>TheSlope Contact Details</h1>

        <div className="details">
          <p>
            <strong>Phone:</strong> <a href="tel:+919789722792">+91 97897 22792</a>
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:theeslope@gmail.com">theeslope@gmail.com</a>
          </p>
          <p>
            <strong>Website:</strong> <a href="https://theslope.in">https://theslope.in</a>
          </p>
          <p>
            <strong>Location:</strong> Chennai, Tamil Nadu, India</p>
          <p>
            <strong>Instagram:</strong> <a href="https://www.instagram.com/_theslope_/">@TheSlope</a></p>
        </div>

        <a className="save-btn" href="/contact.vcf" download>
          Save Our Contact
        </a>

        <p className="footer">Thank you for connecting!</p>
      </div>
    </div>
  );
}
