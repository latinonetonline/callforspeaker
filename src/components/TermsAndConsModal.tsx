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
          borderRadius: '10px'
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
        <h2>Terminos y Condiciones Call For Speakers:</h2>
        <ul>
          <li>
            Los organizadores pueden llegar a cambiar el contenido de la
            propuesta de ser necesario para hacerlo más vistoso o adaptado a las
            redes (siempre manteniendo el tema principal).
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
            Los Webinars serán dados en el canal oficial de la comunidad. Aunque
            también se pueden dar en simultaneo con otro canal mediante el
            Streamyard del equipo de organización de Latino .NET Online
          </li>
          <li>
            El título de la charla puede variar tanto en el flyer, en la
            transmisión, en el evento de Meetup y/o en las redes sociales.
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
        </ul>
        <div className="maintenance-notification">
          <p>
            Actualmente los terminos y condiciones se encuentran en
            mantenimiento
          </p>
        </div>
      </ReactModal>
    </>
  );
};

export default TermsAndConsModal;
