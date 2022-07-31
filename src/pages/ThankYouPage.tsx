import React from "react";
import { useAppContext } from "../data/AppContext";
import "./ThankYouPage.scss";

interface ThankYouPageProps {}

const ThankYouPage: React.FC<ThankYouPageProps> = () => {
  const { state } = useAppContext();
  const firstSpeaker = state.callForSpeakers.form.speakerName;
  const secondSpeaker = state.callForSpeakers.form.secondSpeakerName;

  return (
    <div id="thankyou">
      <div className="inner">
        <img className="img-center" src="assets/logo.png" />
        <div className="wizard-header">
          <h1
            id="thankyou-title"
            className="heading welcome"
            style={{ textAlign: "center" }}
          >
            Muchas Gracias {firstSpeaker} {secondSpeaker && `y ${secondSpeaker}`} Por Postular Su Charla
          </h1>

          <p style={{ marginTop: "50px", textAlign: "center" }}>
            Pronto estaremos en contacto.
          </p>
          <p style={{ textAlign: "center" }}>
            No olvides seguirnos en nuestras redes sociales 😉
          </p>

          <div className="logos_container">
            <div className="facebook-logo">
              <a
                href="https://www.facebook.com/LatinoNETOnline"
                target="_blank"
              >
                <img src="/assets/facebook-logo.png" alt="" />
              </a>
            </div>
            <div className="twitter-logo">
              <a href="https://twitter.com/latinonetonline" target="_blank">
                <img src="/assets/twitter-logo.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
