import Menu from "../components/Navbar";
import "../pages/Styles.css";
import registro from "../pages/img/logo.png";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

function Pacientes() {
  return (
    <div className="principal">
      <div className="dashboard">
        <Menu />
      </div>
      <div className="contenido">
        <div className="search">
          <input type="text" placeholder="Buscar" className="search-input" />
        </div>
        <div className="add-p">
          <Link to="/nuevousuario">
          <IconButton aria-label="add">
            <AddCircleOutlineIcon style={{ marginLeft: "auto" }} />
          </IconButton>
          </Link>
        </div>
        <div className="lista-p">
          <div className="paciente">
            <Link to="/informacion">
              <img src={registro} alt="Img" />
            </Link>
            <Link to="/informacion" className="text-link">
              <div className="paciente-i">
                <p className="nombre">Nombre del Paciente</p>
                <p className="diag">Información básica</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pacientes;
