import React from "react";
import "../styles/Button.css";
const Button = ({ buttonText, color }) => {
  return (
    <button className="btn" style={{ background: color }}>
      {buttonText}
    </button>
  );
};

export default Button;
