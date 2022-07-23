import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useAppContext } from "../../data/AppContext";
import {
  setCurrentStep,
  updateFormState,
} from "../../data/call-for-speakers/callforspeakers.action";
import { AdditionalInfoSectionFormInput } from "../../models/FormInput";
import NextButton from "../buttons/NextButton";
import PrevButton from "../buttons/PrevButton";
import TextareaInput from "../inputs/TextareaInput";

interface AdditionalInfoSectionSectionProps {}

const AdditionalInfoSection: React.FC<
  AdditionalInfoSectionSectionProps
> = () => {
  const methods = useForm<AdditionalInfoSectionFormInput>();
  const { handleSubmit } = methods;
  const { state, dispatch } = useAppContext();

  const onValidSubmit = (data: AdditionalInfoSectionFormInput) => {
    console.log(data);
    dispatch(updateFormState(data));
    dispatch(setCurrentStep(state.callForSpeakers.currentStep + 1));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onValidSubmit)}>
        <section id="additional-info-section">
          <div className="section-header">
            <h3 className="heading">Sumemos Valor</h3>
            <p>
              Nadie conoce este tema mejor que vos! Ayudanos a crear el mejor
              contenido para atraer más publico a tu webinar.
            </p>
            <p>
              Las siguientes preguntas son opcionales aunque nos ayudarian para
              poder sumar más valor a tu charla:
            </p>
          </div>

          <div className="form-row">
            <TextareaInput
              value={state.callForSpeakers.form.answer1}
              name="answer1"
              legend="¿Para quien es esta charla?"
              placeholder="Escribe tu respuesta..."
            />
          </div>
          <div className="form-row">
            <TextareaInput
              value={state.callForSpeakers.form.answer2}
              name="answer2"
              legend="¿Que podre hacer con este nuevo conocimiento?"
              placeholder="Escribe tu respuesta..."
            />
          </div>
          <div className="form-row">
            <TextareaInput
              value={state.callForSpeakers.form.answer3}
              name="answer3"
              legend="¿Te animas a contarnos un caso de uso?"
              placeholder="Escribe tu respuesta..."
            />
          </div>
        </section>
        <div className="navigation-buttons_container button_container">
          <div className="navigation-btn_container">
            <PrevButton />
            <NextButton type="submit" />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default AdditionalInfoSection;
