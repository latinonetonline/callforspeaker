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
          name="answer1"
          legend="¿Para quien es esta charla?"
          placeholder="Escribe tu respuesta..."
        />
      </div>
      <div className="form-row">
        <TextareaInput
          name="answer2"
          legend="¿Que podre hacer con este nuevo conocimiento?"
          placeholder="Escribe tu respuesta..."
        />
      </div>
      <div className="form-row">
        <TextareaInput
          name="answer3"
          legend="¿Te animas a contarnos un caso de uso?"
          placeholder="Escribe tu respuesta..."
        />
      </div>
    </section>
  );
};

export default AdditionalInfoSection;
