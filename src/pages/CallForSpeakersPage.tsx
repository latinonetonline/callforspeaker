import React, { useEffect } from "react";
import "./CallForSpeakersPage.scss";
import "animate.css";
import WelcomeSection from "../components/sections/WelcomeSection";
import PersonalInformation from "../components/sections/PersonalInformationSeccion";
import TabComponent from "../components/TabComponent";
import PresentationSection from "../components/sections/PresentationSection";
import AdditionalInfoSection from "../components/sections/AdditionalInfoSection";
import ConfirmationSection from "../components/sections/ConfirmationSection";
import { useAppContext } from "../data/AppContext";
import { loadData } from "../data/call-for-speakers/callforspeakers.action";
import { StepSeccion } from "../models/StepSeccion";
import StepSeccionTabContent from "../components/sections/components/StepSeccionTabContent";
import SecondPersonalInformation from "../components/sections/SecondPersonalInformationSeccion";
import SpinnerLoading from "../components/SpinnerLoading";

interface CallForSpeakersProps {}

const stepSeccions: StepSeccion[] = [
  {
    number: "01",
    seccion: WelcomeSection,
  },
  {
    number: "02",
    seccion: PersonalInformation,
  },
  {
    number: "2.2",
    seccion: SecondPersonalInformation,
  },
  {
    number: "03",
    seccion: PresentationSection,
  },
  {
    number: "04",
    seccion: AdditionalInfoSection,
  },
  {
    number: "05",
    seccion: ConfirmationSection,
  },
];

const CallForSpeakers: React.FC<CallForSpeakersProps> = () => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    dispatch(loadData);
  }, []);

  const getActiveClassName = (tabId: number, className: string) =>
    state.callForSpeakers.currentStep === tabId ? className : "";

  const getStepSeccion = () => {
    const currentStep = state.callForSpeakers.currentStep;
    const step = state.callForSpeakers.steps.find(
      (_, index) => index === currentStep - 1
    );

    const stepSeccion = stepSeccions.find((x) => x.number === step?.number)!;
    return stepSeccion;
  };

  return (
    <div id="call-for-speakers_container">
      <div className="steps-section_container">
        <ul>
          {state.callForSpeakers.steps.map((step, index) => (
            <TabComponent
              key={index}
              getActiveClassName={getActiveClassName}
              tabId={index + 1}
              stepNumber={step.number}
              stepTitle={step.title}
            />
          ))}
        </ul>
      </div>
        <div className="steps-content_container">
          <StepSeccionTabContent stepSeccion={getStepSeccion()} />
        </div>
        {state.callForSpeakers.isLoading && <SpinnerLoading />}
    </div>
  );
};

export default CallForSpeakers;
