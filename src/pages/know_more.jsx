import React from "react";
import FAQs from "../components/more/faqs";
import Feedback from "../components/more/feedback";
import "./know_more.css"; 

const KnowMore = () => {
  return (
    <div className="know-more-page">
      <h1>Know More About CauseConnect</h1>
      <p>Learn how our platform works and find answers to frequently asked questions.</p>

      {/* Feedback (How It Works) Section */}
      <Feedback />

      {/* FAQs Section */}
      <FAQs />
    </div>
  );
};

export default KnowMore;
