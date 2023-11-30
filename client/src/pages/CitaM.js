import { useState } from "react";
import Menu from "../components/Navbar";
import "../pages/Styles.css";
import HelpButtton from "../components/HelpButtton";
import Modal from "../components/Modal";
import Calendario from "../components/Calendario";
import { Checkbox, FormControlLabel } from "@mui/material";
import CheckBox from "../components/CheckBox";
import CheckE from "../components/CheckE";
import CheckM from "../components/CheckM";
import CheckD from "../components/CheckD";
import CalendarioFH from "../components/CalendarioFH";
import InputM from '../components/InputM'

function CitaM() {
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

  /* checkbox */
  const [asegurado, setAsegurado] = useState(false);

  const handleAseguradoChange = (value) => {
    setAsegurado(value);
  };

  return (
    <div className="principal">
      <div className="dashboard">
        <Menu />
      </div>
      <div className="contenido">
        <div className="barra">
          <p>Datos del Paciente</p>
        </div>
        <div className="inp-ci">
          <label>Nombre del paciente: </label>
          <input type="text" className="user-c" />
          <label>Fecha de Nacimiento: </label>
          <Calendario />
        </div>
        <div className="inp-ci">
          <label>Número de Teléfono: </label>
          <input type="tel" className="tel-ci" />
          <label>Correo Electrónico: </label>
          <input type="email" className="user-c" />
        </div>
        <div className="inp-ci">
          <div className="t-seg">
            <FormControlLabel
              control={
                <div>
                  <Checkbox
                    checked={asegurado}
                    onChange={() => handleAseguradoChange(true)}
                  />
                  <Checkbox
                    checked={!asegurado}
                    onChange={() => handleAseguradoChange(false)}
                  />
                </div>
              }
              label="Asegurado: Si / No"
              labelPlacement="start"
            />
          </div>
          <label>Tipo de Seguro: </label>
          <CheckBox />
          <label>Número de Poliza: </label>
          <input type="text" className="tel-ci" />
        </div>
        <div className="barra-1">
          <p>Datos de la Cita</p>
        </div>
        <div className="inp-ci">
          <label>Especialidad: </label>
          <CheckE />
          <label>Procedimiento: </label>
          <CheckM />
          <label>Doctor: </label>
          <CheckD />
        </div>
        <div className="inp-ci">
          <div className="fyh">
            <label>Fecha y Hora: </label>
          </div>
          <CalendarioFH />
          <div className="mtv">
          <label>Motivo de la Cita: </label>
          </div>
          <InputM/>
        </div>
        <button type="submit" className="btn-gci">Guardar</button>
        <diV onClick={() => handleItemClick("Guia de ayuda")}>
          <HelpButtton />
        </diV>
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

export default CitaM;
