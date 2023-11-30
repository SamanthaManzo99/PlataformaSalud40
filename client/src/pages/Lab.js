import { useState } from "react";
import Menu from "../components/Navbar";
import registro from "../pages/img/logo.png";
import "../pages/Styles.css";
import HelpButtton from "../components/HelpButtton";
import Modal from "../components/Modal";   
import { Link } from "react-router-dom";

function Lab() {
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
        <div className="search">
          <input type="text" placeholder="Buscar" className="search-input" />
        </div>
        <div className="lista-p">
          <div className="paciente">
            <Link to="/informacion">
              <img src={registro} alt="Img" />
            </Link>
            <Link to="#" className="text-link">
              <div className="paciente-i">
                <p className="nombre">Nombre del laboratorio</p>
                <p className="diag">Información básica</p>
              </div>
            </Link>
          </div>
        </div>
        <div onClick={() => handleItemClick("Guia de ayuda")}>
          <HelpButtton />
        </div>
      </div>
      {isModalOpen && (
        <Modal>
          {/* <h2>Detalles del historial medico</h2> */}
          <p>{modalContent}</p>
          <button onClick={closeModal}>Cerrar</button>
        </Modal>
      )}
    </div>
  );
}

export default Lab;
