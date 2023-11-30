import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Inicio from './pages/Inicio'
import Pacientes from './pages/Pacientes'
import Info from './pages/InfoPaci'
import NewUser from './pages/NewUser'
import Exp from './pages/Exp'
import ExpI from './pages/ExpI'
import Lab from './pages/Lab'
import Receta from './pages/Receta'
import Cita from './pages/CitaM'
import Calendario from './pages/Calendario'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/inicio' element={<Inicio/>}/>
        <Route path='/pacientes' element={<Pacientes/>}/>
        <Route path='/informacion' element={<Info/>}/>
        <Route path='/expediente' element={<Exp/>}/>
        <Route path='/informacionex' element={<ExpI/>}/>
        <Route path='/laboratorio' element={<Lab/>}/>
        <Route path='/receta' element={<Receta/>}/>
        <Route path='/cita' element={<Cita/>}/>
        <Route path='/calendario' element={<Calendario/>}/>
        <Route path='/nuevousuario' element={<NewUser/>}/>
      </Routes>

    </BrowserRouter>
  )
}
