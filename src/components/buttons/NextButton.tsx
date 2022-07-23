import React from "react";
import "./ButtonStyles.scss";

interface NextButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "reset" | "button";
}

const NextButton: React.FC<NextButtonProps> = ({ onClick, type }) => {
  return (
    <button type={type} onClick={onClick} className="next-button">
      <img src="/assets/arrow-right.png" alt="" />
    </button>
  );
};

export default NextButton;
