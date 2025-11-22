import React from "react";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-wrapper">
      <div className="card">
        <h1>TheSlope</h1>
        <p className="sub">Owners — Sanjay Sha</p>

        <div className="details">
          <p>
            <strong>Phone:</strong> <a href="tel:+919787922786">+91 97879 22786</a>
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:theeslope@gmail.com">theeslope@gmail.com</a>
          </p>
          <p>
            <strong>Website:</strong> <a href="https://theslope.in">https://theslope.in</a>
          </p>
          <p>
            <strong>Location:</strong> Salem, Tamil Nadu, India</p>
          <p>
            <strong>Role:</strong> Founder & Operator</p>
          <p>
            <strong>Instagram:</strong> <a href="https://instagram.com/theslope">@theslope</a></p>
        </div>

        <a className="save-btn" href="/contact.vcf" download>
          Save My Contact
        </a>

        <p className="footer">Thank you for connecting!</p>
      </div>
    </div>
  );
}
