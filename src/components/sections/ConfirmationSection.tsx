import React from "react";
import SpeakerConfirmationComponent from "./components/SpeakerConfirmationComponent";
import TalkConfirmationComponent from "./components/TalkConfirmationComponent";

interface ConfirmationSectionProps {}

const ConfirmationSection: React.FC<ConfirmationSectionProps> = () => {
  return (
    <section id="confirmation-section">
      <div className="section-header">
        <h3 className="heading">Confirmación</h3>
        <p>
          Estas a un click de postular tu charla. Podes volver a los pasos
          anteriores si necesitas editar algún campo.
        </p>
      </div>

      <SpeakerConfirmationComponent
        image="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
        name="Speaker Example"
        email="speaker@email.com"
        twitter="@speakerTwitter"
        description="Descripción del speaker"
      />

      <div className="section-header">
        <h4>Sobre tu charla</h4>
      </div>

      <TalkConfirmationComponent
        date="Sabado 03 de Diciembre del 2022"
        title="Nombre de la charla"
        description="Descripción de la charla, Sarasa Sarasa, blablabla"
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
            <p className="word-break confirmation-answer1">Ni idea</p>

            <p className="word-break">
              <strong>¿Qué podre hacer con este nuevo conocimiento?</strong>
            </p>
            <p className="word-break confirmation-answer2">
              Absolutamente nada
            </p>

            <p className="word-break">
              <strong>¿Te animas a contarnos un caso de uso?</strong>
            </p>
            <p className="word-break confirmation-answer3">
              No, la verdad que no
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfirmationSection;
