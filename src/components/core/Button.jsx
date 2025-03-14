import React from "react";

const Button = ({ text, onClick, type = "button", className = "" }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`gradient-button ${className}`}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  