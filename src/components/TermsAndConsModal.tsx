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
  return (
    <>
      <ReactModal
        isOpen={modalIsOpen}
        className="terms-and-cons-modal"
        contentLabel="Modal de terminos y condiciones para la postulación de charlas en la comunidad Latino .NET Online"
      >
        <h2>Terminos y Condiciones Call For Speakers:</h2>
        <ul>
          <li>
            Los organizadores pueden llegar a cambiar el contenido de la
            propuesta de ser necesario siempre manteniendo el tema principal EJ:
            Titulo: "Introducción a .NET 6" Nuevo Titulo: "Conociendo las
            novedades de .NET 6"
          </li>
          <li>
            Los Webinars serán dadas en el canal oficial de la comunidad.
            También se pueden dar  en simultaneo con otro canal mediante el
            Streamyard del equipo de organización de Latino .NET Online
          </li>
          <li>
            El título de la charla puede varias tanto en el flyer, en la
            transmisión, en el evento de Meetup y/o en las redes sociales EJ: 
            "Save Points para salvar tu Transacción"       "Save Points para
            salvar tu Transacción con Entity Framework Core"       "Save Points
            para salvar tu Transacción con EF Core"
          </li>
        </ul>
        <button onClick={closeModal}>close</button>
      </ReactModal>
    </>
  );
};

export default TermsAndConsModal;
