import React from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { useAppContext } from "../../data/AppContext";
import {
  setCurrentStep,
  updateFormState,
} from "../../data/call-for-speakers/callforspeakers.action";
import { PresentationSectionFormInput } from "../../models/FormInput";
import NextButton from "../buttons/NextButton";
import PrevButton from "../buttons/PrevButton";
import LongInputComponent from "../inputs/LongInputComponent";
import SaturdayInput from "../inputs/SaturdayInput";
import TextareaInput from "../inputs/TextareaInput";

interface PresentationSectionProps {}

const PresentationSection: React.FC<PresentationSectionProps> = () => {
  const methods = useForm<PresentationSectionFormInput>();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;
  const { state, dispatch } = useAppContext();

  const onValidSubmit = (data: PresentationSectionFormInput) => {
    console.log(data);
    dispatch(updateFormState(data));
    dispatch(setCurrentStep(state.callForSpeakers.currentStep + 1));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onValidSubmit)}>
        <section id="presentation-section">
          <div className="section-header">
            <h3 className="heading">Presentación</h3>
            <p>Ahora si! Contanos sobre tu exposición.</p>
          </div>

          <div className="form-row">
            <LongInputComponent
              value={state.callForSpeakers.form.title}
              name="title"
              legend="Titulo"
              inputType="text"
              placeholder="Titulo"
              required={true}
              error={!!errors.title}
            />
          </div>
          <div className="form-row">
            <TextareaInput
              value={state.callForSpeakers.form.description}
              name="description"
              legend="Descripción"
              placeholder="Lucite! ¿Como convencerias a alguien de asistir a tu charla?"
              required={true}
              error={!!errors.description}
            />
          </div>
          <div className="form-row form-row-date">
            <Controller
              name="date"
              control={control}
              defaultValue={state.callForSpeakers.form.date}
              rules={{ required: true }}
              render={({ field, formState: { errors } }) => (
                <SaturdayInput
                  value={field.value}
                  onChange={(date) => field.onChange(date)}
                  error={!!errors.date}
                  unavailableDates={state.callForSpeakers.unavailableDates}
                />
              )}
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

export default PresentationSection;
