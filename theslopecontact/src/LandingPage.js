import React from "react";
import "./LandingPage.css";

export default function LandingPage() {
  const handleSaveContact = () => {
    const link = document.createElement("a");
    link.href = "/contact.vcf"; // make sure contact.vcf is in the public folder
    link.download = "TheSlope_Company.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="landing-wrapper">
      <div className="card">
        <h1>TheSlope Contact</h1>

        <div className="details">
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+919789722792">+91 97897 22792</a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:contact@theslope@gmail.com">contact@theslope@gmail.com</a>
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a href="https://theslope.in">https://theslope.in</a>
          </p>
          <p>
            <strong>Location:</strong> Chennai, Tamil Nadu, India
          </p>
          <p>
            <strong>Instagram:</strong>{" "}
            <a href="https://www.instagram.com/_theslope_/">@TheSlope</a>
          </p>
        </div>

        <button className="save-btn" onClick={handleSaveContact}>
          Save Our Contact
        </button>

        <p className="footer">Thank you for connecting!</p>
      </div>
    </div>
  );
}
