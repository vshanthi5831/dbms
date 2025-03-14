import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css"; 

const causes = [
  { id: 1, image: "/images/education.jpg", title: "Education for All" },
  { id: 2, image: "/images/healthcare.jpg", title: "Support Healthcare" },
  { id: 3, image: "/images/disaster.jpg", title: "Disaster Relief" },
  { id: 4, image: "/images/hunger.jpg", title: "End Hunger" },
  { id: 5, image: "/images/animals.jpg", title: "Save Wildlife" },
  { id: 6, image: "/images/women.jpg", title: "Empower Women" }
];

const HeroSection = () => {
  return (
    <div className="hero-container">
      <h1>Support a Cause That Matters</h1><br /><br />
      <div className="marquee"> {/* wraps marquee container  -- contains scrolling content -- helps in smooth flow eliminating overflow */}
        <div className="marquee-content"> {/* conatins image cards -- we apply 10s animation to this block */}
          
          {/* concat is used for this ABCABC if not used it becomes ABC______________ABC
              map function maps the cause cards using its id 
              <img> tag represents the image link from already present causes set 
              <h3> brings the title from the set
              <Link> is used to route to the donation page*/}

          {causes.concat(causes).map((cause) => ( 
            <div key={cause.id} className="cause-card">
              <img src={cause.image} alt={cause.title} />
              <h3>{cause.title}</h3>
              <Link to="/donate">
                <button className="gradient-button">Donate Now</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
