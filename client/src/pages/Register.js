import { useForm } from "react-hook-form";
import {useState} from 'react'
import "../pages/Styles.css";
import registro from "../pages/img/registro.jpg";
import {Link} from 'react-router-dom'

function Register() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null)



  /* 
  entidad relacion
  ftp
  linux
  subir archivos
  permisos de un día
  iniciar con ssh */

  return (
    <div className="principal">
      <div className="imagen">
        <img src={registro} alt="Imagen" />
      </div>
      <div className="right">
        <form onSubmit={handleSubmit((values) => {
              console.log(values);
            })}>
        <div className="text-b">
          <h1>Registrar Usuario</h1>
          <p>Por favor, proporcione los siguientes datos</p>
        </div>
        <input
          type="text"
          {...register("username", { required: true })}
          className="user-r"
          placeholder="Nombre"
        />
        <input
          type="email"
          {...register("email", { required: true })}
          className="user-r"
          placeholder="Correo"
        />
        <input
          type="password"
          {...register("password", { required: true })}
          className="user-r"
          placeholder="Contraseña"
        />
        <input
          type="password"
          {...register("password", { required: true })}
          className="user-r"
          placeholder="Confirmar Contraseña"
        />
        <Link to="/">
          <button type="submit" className="btn-g">
            Guardar
          </button>
        </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
