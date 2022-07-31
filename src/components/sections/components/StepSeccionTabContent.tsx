import { useAppContext } from "../../../data/AppContext";
import { StepSeccion } from "../../../models/StepSeccion";
import ConfirmButton from "../../buttons/ConfirmButton";
import LoginButton from "../../buttons/LoginButton";
import LogoutButton from "../../buttons/LogoutButton";
import NextButton from "../../buttons/NextButton";
import PrevButton from "../../buttons/PrevButton";

interface StepSeccionTabContentProps {
  stepSeccion: StepSeccion;
}

const StepSeccionTabContent: React.FC<StepSeccionTabContentProps> = ({
  stepSeccion,
}) => {
  const { state } = useAppContext();

  const getActiveClassName = (className: string) => {
    const index = state.callForSpeakers.steps.findIndex(
      (x) => x.number === stepSeccion.number
    );
    return state.callForSpeakers.currentStep === index + 1 ? className : "";
  };

  return (
    <div className={`content ${getActiveClassName("active-content")}`}>
      <stepSeccion.seccion />
    </div>
  );
};

export default StepSeccionTabContent;
