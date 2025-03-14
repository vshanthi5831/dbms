import React, { useState } from "react";
import DonationForm from "./Donation_Form"; // Import the form

const DonationButton = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="donation-button-container">
      <button className="gradient-button" onClick={() => setShowForm(!showForm)}>
        Donate Now
      </button>
      {showForm && <DonationForm />} 
    </div>
  );
};

export default DonationButton;
