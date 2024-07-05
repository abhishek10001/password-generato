import React from "react";

const PasswordStrengthIndicator = ({ password = "" }) => {
  console.log("Password prop:", password);

  const getPasswordStrength = () => {
    const passwordLength = password.length;

    if (passwordLength < 10) {
      return "Poor";
    } else if (passwordLength < 14) {
      return "Medium";
    } else if (passwordLength < 16) {
      return "Strong";
    } else {
      return "Very Strong";
    }
  };

  const passwordStrength = getPasswordStrength();
  console.log("Password Strength:", passwordStrength);

  if (!passwordStrength) return <div className="password-strength">Strength: <span style={{ fontWeight: "bold" }}>Empty Password</span></div>;

  return (
    <div className="password-strength">
      Strength: <span style={{ fontWeight: "bold" }}>{passwordStrength}</span>
    </div>
  );
};

export default PasswordStrengthIndicator;
