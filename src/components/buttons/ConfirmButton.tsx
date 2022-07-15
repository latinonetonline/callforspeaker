import React from "react";
import "./ButtonStyles.scss";

interface ConfirmButtonProps {}

const ConfirmButton: React.FC<ConfirmButtonProps> = () => {
  return (
    <div className="confirm-button">
      <img src="/assets/check-icon.png" alt="" />
    </div>
  );
};

export default ConfirmButton;
