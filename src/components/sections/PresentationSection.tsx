import React from "react";
import LongInputComponent from "../inputs/LongInputComponent";
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
          fieldsetId="title-fieldset"
          legend="Titulo"
          inputId="title"
          inputType="text"
          placeholder="Titulo"
        />
      </div>
      <div className="form-row">
        <TextareaInput
          fieldsetId="description2-fieldset"
          legend="Descripción"
          inputId="description2"
          placeholder="Lucite! ¿Como convencerias a alguien de asistir a tu charla?"
        />
      </div>
      <div className="form-row form-row-date">
        <div className="form-holder form-holder-2">
          <fieldset className="saturday-fieldset">
            <label className="special-label">Elegí tu sábado:</label>
            <select name="year" id="year"></select>
            <select name="month" id="month"></select>
            <select name="date" id="date"></select>
          </fieldset>
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
