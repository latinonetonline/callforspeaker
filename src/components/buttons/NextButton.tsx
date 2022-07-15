import React from "react";
import "./ButtonStyles.scss";

interface NextButtonProps {
  handleShowTab: (value: number) => void;
  toTab: number;
}

const NextButton: React.FC<NextButtonProps> = ({ handleShowTab, toTab }) => {
  return (
    <div onClick={() => handleShowTab(toTab)} className="next-button">
      <img src="/assets/arrow-right.png" alt="" />
    </div>
  );
};

export default NextButton;
