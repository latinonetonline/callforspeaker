import React from "react";
import "./ButtonStyles.scss";

interface ConfirmButtonProps {
  onClick: () => void;
}

const ConfirmButton: React.FC<ConfirmButtonProps> = ({ onClick }) => {
  return (
    <div className="confirm-button" onClick={onClick}>
      <img src="/assets/check-icon.png" alt="" />
    </div>
  );
};

export default ConfirmButton;
