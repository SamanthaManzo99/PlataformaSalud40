import Menu from "../components/Navbar";
import "../pages/Styles.css";
import registro from "../pages/img/logo.png";
import medicina from "../pages/img/medicamento.png";
import alergia from "../pages/img/alergia.png";
import antme from "../pages/img/antm.png";
import notas from "../pages/img/notas.png";
import antfa from "../pages/img/antf.png";
import seguro from "../pages/img/seguro.png";
import { Divider } from "@mui/material";
import { useState } from "react";
import Modal from "../components/Modal";
import HelpButtton from "../components/HelpButtton";
import Calendario from '../components/CalendarioFN'

function NewUser() {

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

  const [numeroAleatorio, setnumeroAletorio] = useState("");

  const generarNumero = () => {
    const nuevoNumeroA = Math.floor(Math.random() * 100000000);
    setnumeroAletorio(String(nuevoNumeroA).padStart(8, "0"));
  };

  const [correo, setCorreo] = useState('')
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const nuevoCorreo = event.target.value
    setCorreo(nuevoCorreo)

   /*  validacion correo */
    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!patronCorreo.test(nuevoCorreo)){
      setError('Por favor, introduce un correo valido')
    }
    else{
      setError('')
    }
  }

  const [telefono, setTelefono] = useState('')
  const [errort, setErrorT] = useState('')

  const handleChangeT = (eventt) =>{
    const nuevoTelefeno = eventt.target.value
    setTelefono(nuevoTelefeno)

    /* validacion telefono */
    const patronTelefono = /^\d{10}$/
    if(!patronTelefono.test(nuevoTelefeno)){
      setErrorT('Por favor, ingrese un número de télefono valido')
    }
    else{
      setErrorT('')
    }
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
              <p className="nombre">Nombre del paciente</p>
              <p className="diag">Diagnóstico Actual</p>
            </div>
          </div>
          <div className="btns">
            <button className="btn-edit">Guardar</button>
          </div>
        </div>
        <Divider style={{ border: "1px solid #d0d0d0" }} />
        <div className="input-container">
          <h2>Informacion general</h2>
        </div>
        <div className="input-text">
          <label htmlFor="nombres">Nombres </label>
            <input
              type="text"
              id="nombres"
              name="nombres"
              placeholder="Ej. Mariana"
              className="text"
            />
            <label htmlFor="apellidos">Apellidos </label>
            <input
              type="text"
              id="apellidos"
              name="apellidos"
              placeholder="Ej. Martinez Lopez"
              className="text"
            />
        </div>
        <div className="input-text">
        <label htmlFor="nump">Número de paciente</label>
            <input
              type="text"
              id="nump"
              name="nump"
              value={numeroAleatorio}
              onChange={() => {}}
              onFocus={generarNumero}
              placeholder="Ej. 72351869"
              className="text-1"
            />
            <label>Fecha de Nacimiento: </label>
            <Calendario />
            <label htmlFor="genero">Sexo</label>
            <input
              type="text"
              id="gen"
              name="gen"
              placeholder="Ej. F"
              className="text-1"
            />
        </div>
        <Divider style={{ border: "1px solid #d0d0d0" }} />
        <div className="input-container">
          <h2>Informacion de Contacto</h2>
        </div>
        <div className="input-text-1">
          <label htmlFor="correo">Correo </label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={correo}
              onChange={handleChange}
              placeholder="Ej. marianamtz@gmail.com"
              className="text-2"
            />
            <label htmlFor="telefono">Télefono </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={telefono}
              onChange={handleChangeT}
              placeholder="Ej.4424567890"
              className="text"
            />
        </div>
        <div className="input-err">
          {error && <p style={{color:'red', display:'inline-block', marginRight:'225px'}}> {error}</p>}
          {errort && <p style={{color:'red', display:'inline-block'}}>{errort}</p>}
        </div>
        <Divider style={{ border: "1px solid #d0d0d0" }} />
        <div className="historial">
          <h2>Historial Médico</h2>
          <div className="lista-h">
            <div
              className="item"
              onClick={() => handleItemClick("Medicamentos que consume")}
            >
              <div className="icon-c">
                <img src={medicina} alt="medicina" />
              </div>
              <p>Medicamentos</p>
            </div>
            <div
              className="item"
              onClick={() => handleItemClick("Alergias del paciente")}
            >
              <div className="icon-c">
                <img src={alergia} alt="alergias" />
              </div>
              <p>Alergias</p>
            </div>
            <div
              className="item"
              onClick={() =>
                handleItemClick("Antecedentes Médicos del paciente")
              }
            >
              <div className="icon-c">
                <img src={antme} alt="antme" />
              </div>
              <p>Antecedentes Médicos</p>
            </div>
            <div
              className="item"
              onClick={() =>
                handleItemClick("Antecedentes Familiares del paciente")
              }
            >
              <div className="icon-c">
                <img src={antfa} alt="sntfa" />
              </div>
              <p>Antecedentes Familiares</p>
            </div>
            <div
              className="item"
              onClick={() =>
                handleItemClick("Notas Médicas realizadas al paciente")
              }
            >
              <div className="icon-c">
                <img src={notas} alt="notas" />
              </div>
              <p>Notas Médicas</p>
            </div>
            <div
              className="item"
              onClick={() =>
                handleItemClick("Si cuenta con seguro y que tipo de seguro es")
              }
            >
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
        <label htmlFor="direccion">Dirección</label>
        <input
              type="text"
              id="dir"
              name="dir"
              placeholder="Ej. Alejandrina #6A, Colonia La Florida"
              className="text-1"
            />
        <div className="input-container"></div>
        <Divider style={{ border: "1px solid #d0d0d0" }} />
        <div className="input-container">
          <h2>Contacto de Emergencia</h2>
        </div>
        <div className="input-container"></div>
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
export default NewUser;
