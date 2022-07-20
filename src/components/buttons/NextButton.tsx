import React from "react";
import { useAppContext } from "../../data/AppContext";
import { setCurrentStep } from "../../data/call-for-speakers/callforspeakers.action";
import "./ButtonStyles.scss";

interface NextButtonProps {}

const NextButton: React.FC<NextButtonProps> = () => {
  const { state, dispatch } = useAppContext();

  const handleClick = () => {
    dispatch(setCurrentStep(state.callForSpeakers.currentStep + 1));
  };
  
  return (
    <div onClick={handleClick} className="next-button">
      <img src="/assets/arrow-right.png" alt="" />
    </div>
  );
};

export default NextButton;
