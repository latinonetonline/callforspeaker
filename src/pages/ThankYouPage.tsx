import React, { useEffect, useState } from "react";
import { useAppContext } from "../data/AppContext";
import { resetState } from "../data/call-for-speakers/callforspeakers.action";
import "./ThankYouPage.scss";

interface ThankYouPageProps {}

const ThankYouPage: React.FC<ThankYouPageProps> = () => {
  const [speakers, setSpeakers] = useState({
    firstSpeaker: "",
    secondSpeaker: "",
  });
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    setSpeakers({
      firstSpeaker: state.callForSpeakers.form.speakerName,
      secondSpeaker: state.callForSpeakers.form.secondSpeakerName,
    });
    dispatch(resetState());
  }, []);

  return (
    <div id="thankyou">
      <div className="inner">
        <img
          className="img-center"
          src="assets/logo.png"
          alt="Logo de Latino .NET Online"
        />
        <div className="wizard-header">
          <h1
            id="thankyou-title"
            className="heading welcome"
            style={{ textAlign: "center" }}
          >
            Muchas Gracias {speakers.firstSpeaker}{" "}
            {speakers.secondSpeaker && `y ${speakers.secondSpeaker}`} Por
            Postular Su Charla
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
                rel="noopener noreferrer"
              >
                <img src="assets/facebook-logo.png" alt="" />
              </a>
            </div>
            <div className="twitter-logo">
              <a
                href="https://twitter.com/latinonetonline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="assets/twitter-logo.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
