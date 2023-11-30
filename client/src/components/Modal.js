import React from 'react'
import "../pages/Styles.css";

function Modal(props) {
  return (
    <div className='modal'>
        <div className='modal-c'>
            {props.children}
            
        </div>
    </div>
  )
}

export default Modal