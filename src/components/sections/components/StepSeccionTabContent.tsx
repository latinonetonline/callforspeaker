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

  const getButtons = () => {
    if (state.callForSpeakers.currentStep === 1) {
      return (
        <>
          {state.callForSpeakers.isAuthenticated ? (
            <div className="navigation-btn_container">
              <LogoutButton />
              <NextButton />
            </div>
          ) : (
            <LoginButton />
          )}
        </>
      );
    } else if (
      state.callForSpeakers.steps.length === state.callForSpeakers.currentStep
    ) {
      return (
        <div className="navigation-btn_container">
          <PrevButton />
          <ConfirmButton />
        </div>
      );
    } else {
      return (
        <div className="navigation-btn_container">
          <PrevButton />
          <NextButton />
        </div>
      );
    }
  };

  return (
    <div className={`content ${getActiveClassName("active-content")}`}>
      <div className="tab-content animate__animated animate__fadeIn">
        <stepSeccion.seccion />
        <div className="navigation-buttons_container">
          {getButtons()}
        </div>
      </div>
    </div>
  );
};

export default StepSeccionTabContent;
