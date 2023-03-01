import React from "react";
import ReactModal from "react-modal";

interface TermsAndConsModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
}

const TermsAndConsModal: React.FC<TermsAndConsModalProps> = ({
  modalIsOpen,
  closeModal,
}) => {
  const customStyles = {
    content: {
      borderRadius: "10px",
    },
  };
  return (
    <>
      <ReactModal
        id="terms-and-cons-modal"
        isOpen={modalIsOpen}
        contentLabel="Modal de terminos y condiciones para la postulación de charlas en la comunidad Latino .NET Online"
        style={customStyles}
      >
        <div onClick={closeModal} className="close-modal-btn">
          X
        </div>
        <h2 className="title">Terminos y Condiciones:</h2>
        <p className="disclaimer">
          Al participar en la comunidad Latino .NET Online, aceptas los
          siguientes términos y condiciones:
        </p>
        <ul className="list">
          <li>
            <i>Modificación del contenido:</i> Los organizadores de la Comunidad
            tienen el derecho de modificar el contenido de la propuesta de una
            charla de ser necesario (título y descripción) para hacerlo más
            vistoso para las redes sociales, sin embargo, no modificarán el
            contenido esencial de la charla.
            <br />
            <br />
            <i>
              <div className="example-text">
                A continuación un ejemplo de la modificación del título de una
                charla:
                <br />
                <br />
                Titulo propuesto: "Introducción a .NET 6"
                <br />
                Nuevo Titulo: "Conociendo las novedades de .NET 6"
              </div>
            </i>
          </li>
          <li>
            <i>Adaptación del contenido:</i> Los organizadores de la Comunidad
            tienen el derecho de modificar el título de la charla para los
            diferentes medios de difusión, incluyendo el flyer, en la
            transmisión, en el evento de Meetup y/o en las redes sociales, sin
            previo aviso.
            <br />
            <br />
            <i>
              <div className="example-text">
                Por ejemplo:
                <br />
                <br />
                "Save Points para salvar tu Transacción"
                <br />
                "Save Points para salvar tu transacción con Entity Framework
                Core"
                <br />
                "Save Points para salvar tu Transacción con EF Core"
              </div>
            </i>
          </li>
          <li>
            <i>Difusión del contenido:</i> La Comunidad transmitirá los webinars
            en su canal oficial de YouTube (Latino.NET Online), permitiendo
            transmisión simultánea o en diferido en otro/s canal/es. La
            Comunidad se reserva el derecho de grabar los webinars y utilizarlos
            con fines de promoción, difusión y capacitación en el futuro.
          </li>
          <li>
            <i>Propiedad del contenido:</i> La Comunidad se reserva el derecho
            de utilizar cualquier contenido generado en el canal oficial para la
            creación de nuevo contenido, incluyendo resúmenes, extractos,
            recopilaciones, compilaciones y otros materiales de promoción y
            difusión.
          </li>
          <li>
            <i>Cambios en los términos y condiciones:</i> Los organizadores de
            la Comunidad se reservan el derecho de modificar estos términos y
            condiciones en cualquier momento. Se espera que los participantes
            revisen periódicamente estos términos y condiciones para mantenerse
            informados sobre cualquier cambio.
          </li>
        </ul>
        {/* <div className="maintenance-notification">
          <p>
            Actualmente los terminos y condiciones se encuentran en
            mantenimiento
          </p>
        </div> */}
      </ReactModal>
    </>
  );
};

export default TermsAndConsModal;
