import React from "react";
import { useAppContext } from "../../data/AppContext";
import { setCurrentStep } from "../../data/call-for-speakers/callforspeakers.action";
import "./ButtonStyles.scss";

interface PrevButtonProps {}

const PrevButton: React.FC<PrevButtonProps> = () => {
  const { state, dispatch } = useAppContext();

  const handleClick = () => {
    dispatch(setCurrentStep(state.callForSpeakers.currentStep - 1));
  };

  return (
    <div onClick={handleClick} className="prev-button">
      <img src="assets/arrow-left.png" alt="" />
    </div>
  );
};

export default PrevButton;
