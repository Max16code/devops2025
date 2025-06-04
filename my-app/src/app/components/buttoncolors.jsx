import React from "react";

const Button = ({ text, color }) => {
  return (
    <button style={{ backgroundColor: color, padding: "10px", border: "none", color: "white" }}>
      {text}
    </button>
  );
};

export default Button;

