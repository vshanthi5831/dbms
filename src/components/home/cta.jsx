import React from "react";
import { Link } from "react-router-dom";
import "./cta.css";

const CTA = () => {
  return (
    <div className="cta-section">
      <h2>Ready to Make an Impact?</h2>
      <p>Join thousands of donors making a difference.</p>
      <div className="cta-buttons">
        <Link to="/register">
          <button className="gradient-button">Get Started</button>
        </Link>
        <Link to="/donate">
          <button className="gradient-button">Donate Now</button>
        </Link>
      </div>
    </div>
  );
};

export default CTA;
