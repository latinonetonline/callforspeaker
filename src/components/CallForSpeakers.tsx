import React, { useEffect, useState } from "react";
import "./CallForSpeakers.scss";
import "animate.css";
import WelcomeSection from "./sections/WelcomeSection";
import NextButton from "./buttons/NextButton";
import PersonalInformation from "./sections/PersonalInformation";
import TabComponent from "./TabComponent";
import PresentationSection from "./sections/PresentationSection";
import AdditionalInfoSection from "./sections/AdditionalInfoSection";
import ConfirmationSection from "./sections/ConfirmationSection";
import PrevButton from "./buttons/PrevButton";
import ConfirmButton from "./buttons/ConfirmButton";
import { useAuth } from "oidc-react";

interface CallForSpeakersProps {}

const CallForSpeakers: React.FC<CallForSpeakersProps> = () => {
  const [showTab, setShowTab] = useState(1);
  const [isLogged, setIsLogged] = useState(false);
  const auth = useAuth();
  const handleShowTab = (tabId: number) => {
    setShowTab(tabId);
  };


  const handleLogout = () => {
    auth.signOutRedirect()
    setIsLogged(false);
  }

  useEffect(() => {
    console.log("555")
    auth.userManager.getUser().then((user) => {
      if (user?.access_token) {
        if (user.expired) {
          setIsLogged(false);
        } else {
          setIsLogged(true);
        }
      }
    });
  }, [auth]);

  const getActiveClassName = (tabId: number, className: string) =>
    showTab === tabId ? className : "";

  return (
    <div id="call-for-speakers_container">
      <div className="steps-section_container">
        <ul>
          <TabComponent
            getActiveClassName={getActiveClassName}
            tabId={1}
            stepNumber={"01"}
            stepTitle={"Bienvenidos"}
          />
          <TabComponent
            getActiveClassName={getActiveClassName}
            tabId={2}
            stepNumber={"02"}
            stepTitle={"Información Personal"}
          />
          <TabComponent
            getActiveClassName={getActiveClassName}
            tabId={3}
            stepNumber={"03"}
            stepTitle={"Presentación"}
          />
          <TabComponent
            getActiveClassName={getActiveClassName}
            tabId={4}
            stepNumber={"04"}
            stepTitle={"Sumemos Valor"}
          />
          <TabComponent
            getActiveClassName={getActiveClassName}
            tabId={5}
            stepNumber={"05"}
            stepTitle={"Confirmación"}
          />
        </ul>
      </div>

      <div className="steps-content_container">
        <div className={`content ${getActiveClassName(1, "active-content")}`}>
          <div className="tab-content animate__animated animate__fadeIn">
            <WelcomeSection />
            <div className="button-next_container">
              {isLogged ? (
                <div className="navigation-btn_container">
                  <div onClick={handleLogout} className="prev-button">
                    Logout
                  </div>
                  <NextButton handleShowTab={handleShowTab} toTab={2} />
                </div>
              ) : (
                <button onClick={() => auth.signIn()}>
                  Inicie sesión para continuar
                </button>
              )}
            </div>
          </div>
        </div>

        <div className={`content ${getActiveClassName(2, "active-content")}`}>
          <div className="tab-content animate__animated animate__fadeIn">
            <PersonalInformation />
            <div className="navigation-buttons_container">
              <div className="navigation-btn_container">
                <PrevButton handleShowTab={handleShowTab} toTab={1} />
                <NextButton handleShowTab={handleShowTab} toTab={3} />
              </div>
            </div>
          </div>
        </div>

        <div className={`content ${getActiveClassName(3, "active-content")}`}>
          <div className="tab-content animate__animated animate__fadeIn">
            <PresentationSection />
            <div className="navigation-buttons_container">
              <div className="navigation-btn_container">
                <PrevButton handleShowTab={handleShowTab} toTab={2} />
                <NextButton handleShowTab={handleShowTab} toTab={4} />
              </div>
            </div>
          </div>
        </div>

        <div className={`content ${getActiveClassName(4, "active-content")}`}>
          <div className="tab-content animate__animated animate__fadeIn">
            <AdditionalInfoSection />
            <div className="navigation-buttons_container">
              <div className="navigation-btn_container">
                <PrevButton handleShowTab={handleShowTab} toTab={3} />
                <NextButton handleShowTab={handleShowTab} toTab={5} />
              </div>
            </div>
          </div>
        </div>

        <div className={`content ${getActiveClassName(5, "active-content")}`}>
          <div className="tab-content animate__animated animate__fadeIn">
            <ConfirmationSection />
            <div className="navigation-buttons_container">
              <div className="navigation-btn_container">
                <PrevButton handleShowTab={handleShowTab} toTab={4} />
                <ConfirmButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallForSpeakers;
