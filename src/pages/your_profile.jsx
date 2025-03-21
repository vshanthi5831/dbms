import React from "react";
import OrgDetails from "../components/profile/OrgDetails";
import AdminDetails from "../components/profile/AdminDetails";
import CausesRaised from "../components/profile/CausesRaised";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <h1>Organization Profile</h1>
      <div className="profile-sections">
        <OrgDetails />
        <AdminDetails />
      </div>
      <CausesRaised />
    </div>
  );
};

export default Profile;
