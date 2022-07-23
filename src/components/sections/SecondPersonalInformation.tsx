import React from "react";
import "../inputs/InputsStyles.scss";
import ShortInputComponent from "../inputs/ShortInputComponent";
import LongInputComponent from "../inputs/LongInputComponent";
import TextareaInput from "../inputs/TextareaInput";
import ImageInputComponent from "../inputs/ImageInputComponent";

interface SecondPersonalInformationProps {}

const SecondPersonalInformation: React.FC<
  SecondPersonalInformationProps
> = () => {
  return (
    <section id="personal-information-section">
      <div className="section-header">
        <h3 className="heading">Segundo Speaker</h3>
        <p>
          Atras de toda gran charla hay un gran speaker al cual todos nosotros
          queremos conocer.
        </p>
      </div>

      <div className="form-row">
        <ShortInputComponent
          name="secondSpeakerName"
          legend="Name"
          inputType="text"
          placeholder="Nombre"
        />
        <ShortInputComponent
          name="secondSpeakerLastname"
          legend="Apellido"
          // inputId="last-name"
          inputType="text"
          placeholder="Apellido"
        />
      </div>

      <div className="form-row">
        <LongInputComponent
          name="secondSpeakerEmail"
          legend="Email"
          inputType="text"
          placeholder="example@email.com"
        />
      </div>
      <div className="form-row">
        <LongInputComponent
          name="secondSpeakerTwitter"
          legend="Twitter"
          inputType="text"
          placeholder="@username"
        />
      </div>
      <div className="form-row">
        <TextareaInput
          name="secondSpeakerDescription"
          legend="Descripción"
          placeholder="Nos gustaria saber más de vos"
          required={true}
        />
      </div>
      <div className="form-row">
        <ImageInputComponent
          fieldsetId="image-fieldset"
          legend="Foto para el Flyer"
          inputId="image"
        />
      </div>
    </section>
  );
};

export default SecondPersonalInformation;
