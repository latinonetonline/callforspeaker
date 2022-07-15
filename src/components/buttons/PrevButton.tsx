import React from "react";
import "./ButtonStyles.scss";

interface PrevButtonProps {
  handleShowTab: (value: number) => void;
  toTab: number;
}

const PrevButton: React.FC<PrevButtonProps> = ({ handleShowTab, toTab }) => {
  return (
    <div onClick={() => handleShowTab(toTab)} className="prev-button">
      <img src="/assets/arrow-left.png" alt="" />
    </div>
  );
};

export default PrevButton;
