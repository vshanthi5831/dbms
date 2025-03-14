import React, { useState } from "react";
import "./Donation.css";

const causes = [
    { id: 1, title: "Education for All" },
    { id: 2, title: "Support Healthcare" },
    { id: 3, title: "Disaster Relief" },
    { id: 4, title: "End Hunger" },
    { id: 5, title: "Save Wildlife" },
    { id: 6,  title: "Empower Women" }
  ];

const DonationForm = () => {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [cause, setCause] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${name} for donating $${amount} to ${cause}!`);
  };

  return (
    <div className="donation-form">
      <h2>Make a Donation</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Your Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required
        />
        <select value={cause} onChange={(e) => setCause(e.target.value)} required>
            <option value="" disabled>Select a Cause</option>
            {causes.map((c) => (
                <option key={c.id} value={c.title}>{c.title}</option>
            ))}
        </select>
        <input 
          type="number" 
          placeholder="Amount ($)" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          required
        />
        <button type="submit" className="gradient-button">Donate</button>
      </form>
    </div>
  );
};

export default DonationForm;

