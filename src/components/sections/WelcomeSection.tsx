import React from "react";
import { useAppContext } from "../../data/AppContext";
import { setCurrentStep } from "../../data/call-for-speakers/callforspeakers.action";
import LoginButton from "../buttons/LoginButton";
import LogoutButton from "../buttons/LogoutButton";
import NextButton from "../buttons/NextButton";
import "./SectionsStyles.scss";

interface WelcomeSectionProps {}

const WelcomeSection: React.FC<WelcomeSectionProps> = () => {
  const { state, dispatch } = useAppContext();

  const handleNextClick = () => {
    dispatch(setCurrentStep(state.callForSpeakers.currentStep + 1));
  };

  return (
    <div className="tab-content animate__animated animate__fadeIn">
      <section id="welcome-section">
        <img
          src="assets/logo.png"
          alt=""
          width="176px"
        />
        <div className="description-text">
          <h3 className="heading-welcome">Call For Speakers</h3>

          <h4 className="subtitle">El Call For Speakers de la comunidad</h4>
          <h4 className="sub-subtitle">Latino .NET Online</h4>

          <p className="description">
            Desde el equipo de organización estamos agradecidos de que dediques
            tu tiempo para proponer una charla para dar en uno de nuestros
            sábados de webinar.
          </p>
          <p>Estamos ansiosos de ver su propuesta!</p>
        </div>
      </section>
      <div
        className={`${
          state.callForSpeakers.isAuthenticated
            ? "navigation-buttons_container button_container"
            : "login-btn_container button_container"
        }`}
      >
        <>
          {state.callForSpeakers.isAuthenticated ? (
            <div className="navigation-btn_container">
              <LogoutButton />
              <NextButton onClick={handleNextClick} />
            </div>
          ) : (
            <LoginButton />
          )}
        </>
      </div>
    </div>
  );
};

export default WelcomeSection;
