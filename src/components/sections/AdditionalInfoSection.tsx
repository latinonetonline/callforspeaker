import React from "react";
import TextareaInput from "../inputs/TextareaInput";

interface AdditionalInfoSectionSectionProps {}

const AdditionalInfoSection: React.FC<
  AdditionalInfoSectionSectionProps
> = () => {
  return (
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
          fieldsetId=""
          legend="¿Para quien es esta charla?"
          inputId="question1"
          placeholder="Escribe tu respuesta..."
        />
      </div>
      <div className="form-row">
        <TextareaInput
          fieldsetId=""
          legend="¿Que podre hacer con este nuevo conocimiento?"
          inputId="question2"
          placeholder="Escribe tu respuesta..."
        />
      </div>
      <div className="form-row">
        <TextareaInput
          fieldsetId=""
          legend="¿Te animas a contarnos un caso de uso?"
          inputId="question3"
          placeholder="Escribe tu respuesta..."
        />
      </div>
    </section>
  );
};

export default AdditionalInfoSection;
