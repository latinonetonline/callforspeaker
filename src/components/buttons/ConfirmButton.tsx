import React from "react";
import "./ButtonStyles.scss";

interface ConfirmButtonProps {}

const ConfirmButton: React.FC<ConfirmButtonProps> = () => {
  return (
    <button type="submit" className="confirm-button">
      <img src="/assets/check-icon.png" alt="" />
    </button>
  );
};

export default ConfirmButton;
