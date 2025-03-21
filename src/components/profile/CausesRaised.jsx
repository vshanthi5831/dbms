import React from "react";

const causes = [
  { id: 1, title: "Education for All", amount: "$5,000 Raised" },
  { id: 2, title: "Healthcare Support", amount: "$3,200 Raised" },
  { id: 3, title: "Disaster Relief", amount: "$7,800 Raised" },
];

const CausesRaised = () => {
  return (
    <div className="profile-card">
      <h2>Causes Raised</h2>
      <ul>
        {causes.map((cause) => (
          <li key={cause.id}>
            <strong>{cause.title}:</strong> {cause.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CausesRaised;
