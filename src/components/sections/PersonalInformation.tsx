import React from "react";
import "../inputs/InputsStyles.scss";
import ShortInputComponent from "../inputs/ShortInputComponent";
import LongInputComponent from "../inputs/LongInputComponent";
import TextareaInput from "../inputs/TextareaInput";
import ImageInputComponent from "../inputs/ImageInputComponent";
import SecondSpeakerCheckboxInput from "./components/SecondSpeakerCheckboxInput";
import { FormProvider, useForm } from "react-hook-form";
import { PersonalInformationFormInput } from "../../models/FormInput";
import NextButton from "../buttons/NextButton";
import PrevButton from "../buttons/PrevButton";
import { useAppContext } from "../../data/AppContext";
import {
  setCurrentStep,
  updateFormState,
} from "../../data/call-for-speakers/callforspeakers.action";

const regExpEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

interface PersonalInformationProps {}

const PersonalInformation: React.FC<PersonalInformationProps> = () => {
  const methods = useForm<PersonalInformationFormInput>();
  const {
    handleSubmit,
    formState: { errors, isValid },
  } = methods;
  const { state, dispatch } = useAppContext();

  const onValidSubmit = (data: PersonalInformationFormInput) => {
    console.log(data);
    dispatch(updateFormState(data));
    dispatch(setCurrentStep(state.callForSpeakers.currentStep + 1));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onValidSubmit)}>
        <section id="personal-information-section">
          <div className="section-header">
            <h3 className="heading">Información Personal</h3>
            <p>
              Atras de toda gran charla hay un gran speaker al cual todos
              nosotros queremos conocer.
            </p>
          </div>

          <div className="form-row">
            <ShortInputComponent
              name="speakerName"
              legend="Name"
              inputType="text"
              placeholder="Nombre"
              required={true}
              error={!!errors.speakerName}
            />
            <ShortInputComponent
              name="speakerLastname"
              legend="Apellido"
              inputType="text"
              placeholder="Apellido"
              required={true}
              error={!!errors.speakerLastname}
            />
          </div>

          <div className="form-row">
            <LongInputComponent
              name="speakerEmail"
              legend="Email"
              inputType="text"
              placeholder="example@email.com"
              required={true}
              pattern={regExpEmail}
              error={!!errors.speakerEmail}
            />
          </div>
          <div className="form-row">
            <LongInputComponent
              name="speakerTwitter"
              legend="Twitter"
              inputType="text"
              placeholder="@username"
              pattern={/(^|[^@\w])@(\w{1,15})\b/g}
              error={!!errors.speakerTwitter}
            />
          </div>
          <div className="form-row">
            <TextareaInput
              name="speakerDescription"
              legend="Descripción"
              placeholder="Nos gustaria saber más de vos"
              required={true}
              error={!!errors.speakerDescription}
            />
          </div>
          <div className="form-row">
            <ImageInputComponent
              fieldsetId="image-fieldset"
              legend="Foto para el Flyer"
              inputId="image"
            />
          </div>
          <div className="form-row">

            
            <SecondSpeakerCheckboxInput />
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

export default PersonalInformation;
