import React from "react";
import "../styles/Button.css";
const Button = ({ buttonText, color, weight = "400" }) => {
  return (
    <button className="btn" style={{ background: color, fontWeight: weight }}>
      {buttonText}
    </button>
  );
};

export default Button;
