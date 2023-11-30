import Menu from "../components/Navbar";
import "../pages/Styles.css";
import registro from "../pages/img/logo.png";
import medicina from "../pages/img/medicamento.png";
import alergia from '../pages/img/alergia.png'
import antme from '../pages/img/antm.png'
import antfa from '../pages/img/antf.png'
import notas from '../pages/img/notas.png'
import seguro from '../pages/img/seguro.png'
import { Divider } from "@mui/material";
import {useState} from 'react'
import Modal from '../components/Modal'
import Inputs from '../components/Inputs'
import Inputs2 from '../components/Inputs2'
import HelpButtton from "../components/HelpButtton";

function InfoPaci() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) =>{
    setModalContent(content);
    setIsModalOpen (true);
  };

  const closeModal = () => setIsModalOpen (false);

  const handleItemClick = (content) => {
    openModal (content);
  }

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
          <div className="btns">
            <button className="btn-edit"> Editar Información</button>
            <button className="btn-delete">Eliminiar Usuario</button>
          </div>
        </div>
        <Divider style={{ border: "1px solid #d0d0d0" }} />
        <div className="input-container">
          <h2>Informacion general</h2>
        </div>
        <div className="input-container">
          <Inputs label="Nombres" value="Ej. Mariana"/>
          <Inputs label="Apellidos" value="Ej. Martinez Lopez"/>
        </div>
        <div className="input-container">
          <Inputs2 label="Número de Paciente" value="Ej. 72351869"/>
          <Inputs2 label="Fecha de Nacimiento" value="Ej. 30/04/1980" />
          <Inputs2 label="Sexo" value="Ej. F"/>
        </div>
        <Divider style={{ border: "1px solid #d0d0d0" }} />
        <div className="input-container">
          <h2>Informacion de Contacto</h2>
        </div>
        <div className="input-container">
          <Inputs label="Correo" value="Ej. marianamtz@gmail.com"/>
          <Inputs label="Télefono" value="Ej.4424567890"/>
        </div>
        <Divider style={{ border: "1px solid #d0d0d0" }} />
        <div className="historial">
          <h2>Historial Médico</h2>
          <div className="lista-h">
            <div className="item" onClick={() => handleItemClick('Medicamentos que consume')}>
              <div className="icon-c">
                <img src={medicina} alt="medicina" />
              </div>
              <p>Medicamentos</p>
            </div>
            <div className="item" onClick={() => handleItemClick('Alergias del paciente')}>
              <div className="icon-c">
                <img src={alergia} alt="alergias" />
              </div>
              <p>Alergias</p>
            </div>
            <div className="item" onClick={() => handleItemClick('Antecedentes Médicos del paciente')}>
              <div className="icon-c">
                <img src={antme} alt="antme" />
              </div>
              <p>Antecedentes Médicos</p>
            </div>
            <div className="item" onClick={() => handleItemClick('Antecedentes Familiares del paciente')}>
              <div className="icon-c">
                <img src={antfa} alt="sntfa" />
              </div>
              <p>Antecedentes Familiares</p>
            </div>
            <div className="item" onClick={() => handleItemClick('Notas Médicas realizadas al paciente')}>
              <div className="icon-c">
                <img src={notas} alt="notas" />
              </div>
              <p>Notas Médicas</p>
            </div>
            <div className="item" onClick={() => handleItemClick('Si cuenta con seguro y que tipo de seguro es')}>
              <div className="icon-c">
                <img src={seguro} alt="seguro" />
              </div>
              <p>Seguro Médico</p>
            </div>
          </div>
        </div>
        <Divider style={{ border: "1px solid #d0d0d0" }} />
        <div className="input-container">
          <h2>Ubicación</h2>
        </div>
        <div className="input-container">
          <Inputs label="Dirección" value="Ej. Alejandrina #6A, Colonia La Florida"/>
        </div>
        <div className="input-container">
          <Inputs2 label="Unidad Médica" value="Ej. Clinica #10"/>
          <Inputs label="Dirección" value="Ej. Guadalupe Posada 119, Parque los Alcanfores Secc Nte"/>
        </div>
        <Divider style={{ border: "1px solid #d0d0d0" }} />
        <div className="input-container">
          <h2>Contacto de Emergencia</h2>
        </div>
        <div className="input-container">
          <Inputs label="Nombre" value="Ej. Elsa Martinez Lopez"/>
          <Inputs2 label="Telefono" value="Ej. 4424657823"/>
        </div>
        <div onClick={() => handleItemClick('Guia de ayuda')}>
        <HelpButtton/>
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

export default InfoPaci;
