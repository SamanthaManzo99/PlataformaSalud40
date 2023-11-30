import React from 'react'
import rx from '../pages/img/rx.png' 

const Medica = () => {
  return (
    <div className='medical-p'>
        <div className='doc-i'>
            <div className='field'>
                <label className='doc'>Doctor</label>
                <input type='text' className='under-input'/>
            </div>
            <div className='field'>
                <label>Especialidad</label>
                <input type='text' className='under-input'/>
            </div>
            <div className='field'>
                <label>Cedula</label>
                <input type='text' className='under-input'/>
            </div>
        </div>
        <div className='paci-i'>
            <div className='field'>
                <label>Paciente: </label>
                <input type='text' className='under-input'/>
            </div>
            <div className='field'>
                <label>Dirección: </label>
                <input type='text' className='under-input'/>
            </div>
            <div className='field'>
                <label>Edad: </label>
                <input type='text' className='under-input'/>
            </div>
            <div className='field'>
                <label>Fecha: </label>
                <input type='text' className='under-input'/>
            </div>
            <div className='field'>
                <label>Diagnóstico: </label>
                <input type='text' className='under-input diag'/>
            </div>
        </div>
        <div className='img-rx'>
            <img src={rx} alt='rx' className='pre-rx'/>
        </div>
    </div>
  )
}

export default Medica