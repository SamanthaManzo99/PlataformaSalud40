import {useState} from 'react'
import Menu from '../components/Navbar'
import print from '../pages/img/print.png'
import save from '../pages/img/guardar.png'
import "../pages/Styles.css"
import HelpButtton from '../components/HelpButtton'
import Modal from '../components/Modal'
import { IconButton } from '@mui/material'
import Medica from '../components/Medica'

function Receta() {

    const [isModalOpen, setIsModalOpen] = useState (false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    }
    const closeModal = () => setIsModalOpen(false);

    const handleItemClick = (content) => {
        openModal(content);
    }
    
  return (
    <div className='principal'>
        <div className='dashboard'>
            <Menu/>
        </div>
        <div className='contenido'>
            <div className='header'>
                <div className='btns'>
                    <IconButton aria-label='save' className='btn-save'>
                        <img src={save} alt='save'/>
                    </IconButton>
                    <IconButton aria-label='print' className='btn-print'> <img src={print} alt='print'/></IconButton>
                </div>
            </div>
            <div onClick={() => handleItemClick ("Sección de ayuda")}><HelpButtton/>
            </div>
            <Medica/>
            {isModalOpen && (
                <Modal>
                    <p>{modalContent}</p>
                    <button onClick={closeModal}>Cerrar</button>
                </Modal>
            )}
        </div>
    </div>
  )
}

export default Receta