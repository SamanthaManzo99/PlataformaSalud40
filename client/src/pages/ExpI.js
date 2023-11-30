import {useState} from 'react'
import Menu from "../components/Navbar";
import registro from "../pages/img/logo.png";
import "../pages/Styles.css";
import HelpButtton from "../components/HelpButtton";
import Modal from "../components/Modal";

function ExpI() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleItemClick = (content) => {
    openModal(content);
  };
  return (
    <div className="principal">
      <div className="dashboard">
        <Menu />
      </div>
      <div className="contenido">
        <div className="header">
          <div className="paciente">
            <img src={registro} alt="Img" />
            <div className="paciente-i">
              <p className="nombre">Nombre del Paciente</p>
              <p className="diag">Diagnóstico Actual</p>
            </div>
          </div>
        </div>
        <div onClick={() => handleItemClick("Sección de ayuda")}>
          <HelpButtton />
        </div>
      </div>
      {isModalOpen && (
        <Modal>
          <p>{modalContent}</p>
          <button onClick={closeModal}>Cerrar</button>
        </Modal>
      )}
    </div>
  );
}

export default ExpI;
