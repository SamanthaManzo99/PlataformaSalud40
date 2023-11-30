import { useForm } from "react-hook-form";
import "../pages/Styles.css";
import registro from "../pages/img/registro.jpg";
import { Link } from "react-router-dom";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import {Visibility, VisibilityOff} from '@mui/icons-material'
import { useState } from "react";

function Login() {
  const { register, handleSubmit } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) =>{
    event.preventDefault();
  }


  return (
    <div className="principal">
      <div className="imagen">
        <img src={registro} alt="Imagen" />
      </div>
      <div className="right">
        <form
          onSubmit={handleSubmit((values) => {
            console.log(values);
          })}
        >
          <div className="text-b">
            <h1>Iniciar Sesión</h1>
            <p>Por favor, proporcione los siguientes datos</p>
          </div>
          <input
            type="text"
            {...register("username", { required: true })}
            className="user-r"
            placeholder="Nombre"
          />
          <input
            type={showPassword ? 'text' : 'password'}
            {...register("password", { required: true })}
            className="user-r"
            placeholder="Contraseña"
            InputProps={{
              endAdorment:(
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  >
                    {showPassword ? <Visibility/> : <VisibilityOff/>}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          <div className="rec-us">
            <Link to="/" className="rec-con">
              Recuperar Contraseña
            </Link>
            <Link to="/register" className="nv-us">
              Nuevo Usuario
            </Link>
          </div>
          
          <Link to ="/inicio">
            <button type="submit" className="btn-g">
              Entrar
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
