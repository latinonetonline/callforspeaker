import React from "react";
import LongInputComponent from "../inputs/LongInputComponent";
import SaturdayInput from "../inputs/SaturdayInput";
import TextareaInput from "../inputs/TextareaInput";

interface PresentationSectionProps {}

const PresentationSection: React.FC<PresentationSectionProps> = () => {
  return (
    <section id="presentation-section">
      <div className="section-header">
        <h3 className="heading">Presentación</h3>
        <p>Ahora si! Contanos sobre tu exposición.</p>
      </div>

      <div className="form-row">
        <LongInputComponent
          name="title"
          legend="Titulo"
          inputType="text"
          placeholder="Titulo"
        />
      </div>
      <div className="form-row">
        <TextareaInput
          name="description"
          legend="Descripción"
          placeholder="Lucite! ¿Como convencerias a alguien de asistir a tu charla?"
          required={true}
        />
      </div>
      <div className="form-row form-row-date">
        <SaturdayInput onChange={(date) => console.log(date)} />
      </div>
    </section>
  );
};

export default PresentationSection;
