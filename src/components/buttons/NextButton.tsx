import React from "react";
import { useAppContext } from "../../data/AppContext";
import { setCurrentStep } from "../../data/call-for-speakers/callforspeakers.action";
import "./ButtonStyles.scss";

interface NextButtonProps {
  canNavigate?: () => boolean;
}

const NextButton: React.FC<NextButtonProps> = ({ canNavigate }) => {
  const { state, dispatch } = useAppContext();

  const handleClick = () => {
    if (!canNavigate || canNavigate()) {
      dispatch(setCurrentStep(state.callForSpeakers.currentStep + 1));
    }
  };

  return (
    <button type="submit" onClick={handleClick} className="next-button">
      <img src="/assets/arrow-right.png" alt="" />
    </button>
  );
};

export default NextButton;
