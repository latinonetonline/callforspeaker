import React from "react";
import { useAppContext } from "../../data/AppContext";
import useObjectURL from "../../hooks/useObjectURL";
import ConfirmButton from "../buttons/ConfirmButton";
import PrevButton from "../buttons/PrevButton";
import SpeakerConfirmationComponent from "./components/SpeakerConfirmationComponent";
import TalkConfirmationComponent from "./components/TalkConfirmationComponent";

interface ConfirmationSectionProps {}

const ConfirmationSection: React.FC<ConfirmationSectionProps> = () => {
  const { state, dispatch } = useAppContext();
  const { objectURL: speakerPhoto } = useObjectURL(
    state.callForSpeakers.form.speakerPhoto
  );
  const { objectURL: secondSpeakerPhoto } = useObjectURL(
    state.callForSpeakers.form.secondSpeakerPhoto
  );

  return (
    <>
      <section id="confirmation-section">
        <div className="section-header">
          <h3 className="heading">Confirmación</h3>
          <p>
            Estas a un click de postular tu charla. Podes volver a los pasos
            anteriores si necesitas editar algún campo.
          </p>
        </div>

        <SpeakerConfirmationComponent
          image={speakerPhoto!}
          name={
            state.callForSpeakers.form.speakerName +
            " " +
            state.callForSpeakers.form.speakerLastname
          }
          email={state.callForSpeakers.form.speakerEmail}
          twitter={state.callForSpeakers.form.speakerTwitter}
          description={state.callForSpeakers.form.speakerDescription}
        />

        {state.callForSpeakers.hasSecondSpeaker && (
          <SpeakerConfirmationComponent
            image={secondSpeakerPhoto!}
            name={
              state.callForSpeakers.form.secondSpeakerName +
              " " +
              state.callForSpeakers.form.secondSpeakerLastname
            }
            email={state.callForSpeakers.form.secondSpeakerEmail}
            twitter={state.callForSpeakers.form.secondSpeakerTwitter}
            description={state.callForSpeakers.form.secondSpeakerDescription}
          />
        )}

        <div className="section-header">
          <h4>Sobre tu charla</h4>
        </div>

        <TalkConfirmationComponent
          date={state.callForSpeakers.form.date!}
          title={state.callForSpeakers.form.title}
          description={state.callForSpeakers.form.description}
        />

        <div className="section-header">
          <h4 className="heading">Más detalles</h4>
        </div>

        <div className="summary-container">
          <div className="form-row">
            <div className="form-holder form-holder-2">
              <p className="word-break">
                <strong>¿Para quién es esta charla?</strong>
              </p>
              <p className="word-break confirmation-answer1">
                {state.callForSpeakers.form.answer1}
              </p>

              <p className="word-break">
                <strong>¿Qué podre hacer con este nuevo conocimiento?</strong>
              </p>
              <p className="word-break confirmation-answer2">
                {state.callForSpeakers.form.answer2}
              </p>

              <p className="word-break">
                <strong>¿Te animas a contarnos un caso de uso?</strong>
              </p>
              <p className="word-break confirmation-answer3">
                {state.callForSpeakers.form.answer3}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="navigation-buttons_container button_container">
        <div className="navigation-btn_container">
          <PrevButton />
          <ConfirmButton />
        </div>
      </div>
    </>
  );
};

export default ConfirmationSection;
