import React from "react";
import "../inputs/InputsStyles.scss";
import ShortInputComponent from "../inputs/ShortInputComponent";
import LongInputComponent from "../inputs/LongInputComponent";
import TextareaInput from "../inputs/TextareaInput";
import ImageInputComponent from "../inputs/ImageInputComponent";
import SecondSpeakerCheckboxInput from "./components/SecondSpeakerCheckboxInput";

interface PersonalInformationProps {}

const PersonalInformation: React.FC<PersonalInformationProps> = () => {
  return (
    <section id="personal-information-section">
      <div className="section-header">
        <h3 className="heading">Información Personal</h3>
        <p>
          Atras de toda gran charla hay un gran speaker al cual todos nosotros
          queremos conocer.
        </p>
      </div>

      <div className="form-row">
        <ShortInputComponent
          fieldsetId="name-fieldset"
          legend="Name"
          inputId="first-name"
          inputType="text"
          placeholder="Nombre"
        />
        <ShortInputComponent
          fieldsetId="lastname-fieldset"
          legend="Apellido"
          inputId="last-name"
          inputType="text"
          placeholder="Apellido"
        />
      </div>

      <div className="form-row">
        <LongInputComponent
          fieldsetId="email-fieldset"
          legend="Email"
          inputId="your_email"
          inputType="text"
          placeholder="example@email.com"
        />
      </div>
      <div className="form-row">
        <LongInputComponent
          fieldsetId=""
          legend="Twitter"
          inputId="twitter"
          inputType="text"
          placeholder="@username"
        />
      </div>
      <div className="form-row">
        <TextareaInput
          fieldsetId="description-fieldset"
          legend="Descripción"
          inputId="description"
          placeholder="Nos gustaria saber más de vos"
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
  );
};

export default PersonalInformation;