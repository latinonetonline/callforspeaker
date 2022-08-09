import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../data/AppContext";
import {
  createProposal,
  setError,
} from "../../data/call-for-speakers/callforspeakers.action";
import { ConfirmSectionFormInput } from "../../models/FormInput";
import useObjectURL from "../../hooks/useObjectURL";
import ConfirmButton from "../buttons/ConfirmButton";
import PrevButton from "../buttons/PrevButton";
import TermsAndConsModal from "../TermsAndConsModal";
import SpeakerConfirmationComponent from "./components/SpeakerConfirmationComponent";
import TalkConfirmationComponent from "./components/TalkConfirmationComponent";
import TermsAndConsCheckboxInput from "./components/TermsAndConsCheckoutInput";

interface ConfirmationSectionProps {}

const ConfirmationSection: React.FC<ConfirmationSectionProps> = () => {
  const methods = useForm<ConfirmSectionFormInput>();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { objectURL: speakerPhoto } = useObjectURL(
    state.callForSpeakers.form.speakerPhoto
  );
  const { objectURL: secondSpeakerPhoto } = useObjectURL(
    state.callForSpeakers.form.secondSpeakerPhoto
  );

  useEffect(() => {
    if (state.callForSpeakers.error) {
      console.log(state.callForSpeakers.error);
      dispatch(setError, undefined);
    }
  }, [state.callForSpeakers.error]);

  const onValidSubmit = (data: ConfirmSectionFormInput) => {
    console.log(data);
    handleConfirm();
  };

  const handleConfirm = () => {
    const isConfirm = window.confirm("¿Desea confirmar su propuesta?");
    if (isConfirm) {
      dispatch(createProposal(state.callForSpeakers.form));
    }
  };

  useEffect(() => {
    if (state.callForSpeakers.createProposalSuccess) {
      navigate("thank-you");
    }
  }, [state.callForSpeakers.createProposalSuccess]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onValidSubmit)}>
        <div className="tab-content animate__animated animate__fadeIn">
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
                description={
                  state.callForSpeakers.form.secondSpeakerDescription
                }
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
                    <strong>
                      ¿Qué podre hacer con este nuevo conocimiento?
                    </strong>
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

            <div className="terms-cons_container">
              <div className="form-row">
                <TermsAndConsCheckboxInput
                  name="termsAndconditions"
                  error={!!errors.termsAndconditions}
                  required={true}
                  validate={(value) => value === true}
                  openModal={openModal}
                />
              </div>
            </div>
          </section>
          <div className="navigation-buttons_container button_container">
            <div className="navigation-btn_container">
              <PrevButton />
              <ConfirmButton />
            </div>
          </div>

          <TermsAndConsModal
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
          />
        </div>
      </form>
    </FormProvider>
  );
};

export default ConfirmationSection;
