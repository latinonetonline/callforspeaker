import React, { useEffect, useState } from "react";
import "./CallForSpeakersPage.scss";
import "animate.css";
import WelcomeSection from "../components/sections/WelcomeSection";
import NextButton from "../components/buttons/NextButton";
import PersonalInformation from "../components/sections/PersonalInformation";
import TabComponent from "../components/TabComponent";
import PresentationSection from "../components/sections/PresentationSection";
import AdditionalInfoSection from "../components/sections/AdditionalInfoSection";
import ConfirmationSection from "../components/sections/ConfirmationSection";
import PrevButton from "../components/buttons/PrevButton";
import ConfirmButton from "../components/buttons/ConfirmButton";
import { useAuth } from "oidc-react";
import { useAppContext } from "../data/AppContext";
import { loadData } from "../data/call-for-speakers/callforspeakers.action";

interface CallForSpeakersProps {}

const CallForSpeakers: React.FC<CallForSpeakersProps> = () => {
  const { state, dispatch } = useAppContext();

  // const [showTab, setShowTab] = useState(1);
  const [isLogged, setIsLogged] = useState(false);
  const auth = useAuth();
  // const handleShowTab = (tabId: number) => {
  //   setShowTab(tabId);
  // };

  const handleLogout = () => {
    auth.signOutRedirect();
    setIsLogged(false);
  };

  useEffect(() => {
    dispatch(loadData);
  }, []);

  useEffect(() => {
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
    state.callForSpeakers.currentStep === tabId ? className : "";

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
                  <NextButton />
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
                <PrevButton />
                <NextButton />
              </div>
            </div>
          </div>
        </div>

        <div className={`content ${getActiveClassName(3, "active-content")}`}>
          <div className="tab-content animate__animated animate__fadeIn">
            <PresentationSection />
            <div className="navigation-buttons_container">
              <div className="navigation-btn_container">
                <PrevButton />
                <NextButton />
              </div>
            </div>
          </div>
        </div>

        <div className={`content ${getActiveClassName(4, "active-content")}`}>
          <div className="tab-content animate__animated animate__fadeIn">
            <AdditionalInfoSection />
            <div className="navigation-buttons_container">
              <div className="navigation-btn_container">
                <PrevButton />
                <NextButton />
              </div>
            </div>
          </div>
        </div>

        <div className={`content ${getActiveClassName(5, "active-content")}`}>
          <div className="tab-content animate__animated animate__fadeIn">
            <ConfirmationSection />
            <div className="navigation-buttons_container">
              <div className="navigation-btn_container">
                <PrevButton />
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
